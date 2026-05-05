/* ============================================================
   effects-motion.js — HAYWEB v5.1 Consolidated Motion Effects
   Phase 3.2 Second Pass — 2026-05-05
   Effects contract: effects-plan.md (10 effects: 4P + 4G + 2S)
   ============================================================
   Load order (per effects-plan.md vendor manifest):
     tier-detect.js → gsap.min.js → gsap-scrolltrigger.min.js
     → SplitText.min.js → page-index.js → effects-motion.js (this file)

   Constraints:
   - NO inline handlers, NO CDN scripts
   - All tier checks via window.__deviceTier (set by tier-detect.js)
   - prefers-reduced-motion respected on every effect
   - Lenis DROPPED (Option B) — native IO reveals + data-nav-dark stay untouched
   ============================================================ */

'use strict';

(function () {

  // ── Shared helpers ────────────────────────────────────────────────────
  const TIER           = window.__deviceTier || 'high';
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const IS_TOUCH       = !window.matchMedia('(hover: hover)').matches;
  const IS_PC          = window.matchMedia('(min-width: 1024px)').matches;
  const GSAP_OK        = typeof gsap !== 'undefined';
  const ST_OK          = typeof ScrollTrigger !== 'undefined';
  const SPLIT_OK       = typeof SplitText !== 'undefined';

  if (GSAP_OK && ST_OK) gsap.registerPlugin(ScrollTrigger);
  if (GSAP_OK && SPLIT_OK) gsap.registerPlugin(SplitText);


  /* ====================================================================
     EFFECT 1 — loading-choreography (Platinum)
     Solid #0E0E0E overlay + HAYWEB. gold wordmark fade-up reveal.
     1.8s theatrical timing. SessionStorage gate: 1×/session.
     Key used: 'hayweb-loaded' (per effects-plan.md §1 spec).
     Overlay element injected here (not in HTML) so HTML stays clean.
     Tier: high → full 1.8s | mid → 1.2s | low/reduced → skip entirely.
  ==================================================================== */
  function initLoadingChoreography() {
    // Gate 1: skip on reduced motion or low device
    if (REDUCED_MOTION || TIER === 'low') {
      document.body.classList.add('page-loaded');
      return;
    }

    // Gate 2: skip on repeat session visits
    if (sessionStorage.getItem('hayweb-loaded') === '1') {
      document.body.classList.add('page-loaded');
      return;
    }

    // Build overlay DOM (all via JS — no inline HTML)
    const overlay = document.createElement('div');
    overlay.id = 'page-load-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = '<div class="overlay-bg"></div><span class="overlay-wordmark">HAYWEB<em>.</em></span>';

    // Insert as first child of body (before nav)
    document.body.insertBefore(overlay, document.body.firstChild);
    document.body.classList.add('page-loading');

    // Timing per effects-plan.md §1:
    // high: 1.8s total (600ms fade-in + 600ms hold + 600ms sweep-up)
    // mid:  1.2s total (skip hold phase)
    const isMid = TIER === 'mid';
    const fadeIn   = 600;
    const hold     = isMid ? 0 : 600;
    const sweepOut = 600;
    const totalHold = fadeIn + hold; // when to start sweep

    requestAnimationFrame(() => {
      overlay.classList.add('is-active'); // triggers wordmark fade-in via CSS

      setTimeout(() => {
        overlay.classList.add('is-leaving'); // triggers sweep-up via CSS
        document.body.classList.remove('page-loading');
        document.body.classList.add('page-loaded');

        // Remove from DOM after sweep completes
        setTimeout(() => {
          if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        }, sweepOut + 100); // small buffer

        sessionStorage.setItem('hayweb-loaded', '1');
      }, totalHold);
    });
  }


  /* ====================================================================
     EFFECT 2 — scroll-scrubbing (Platinum)
     Hero italic <em> chars decode letter-by-letter as user scrolls
     through hero section (50% viewport pin, scrub: 1).
     Does NOT conflict with code-009 pillars horizontal pin.
     Tier: high only. mid → simple fade reveal. low/reduced → static.
  ==================================================================== */
  function initScrollScrubbing() {
    if (REDUCED_MOTION || !GSAP_OK || !ST_OK || !SPLIT_OK) return;
    if (TIER === 'low') return;

    // Mid tier: simple fade in on enter (no pin, no scrub)
    const artItalicEl = document.querySelector('.hero-art-typography .art-italic em');
    if (!artItalicEl) return;

    if (TIER === 'mid') {
      // Simple visibility on hero — no pin
      gsap.from(artItalicEl, {
        opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '#home', start: 'top 80%', toggleActions: 'play none none none' }
      });
      return;
    }

    // TIER === 'high': full pin + per-char scrub decode
    // Split the em text into chars
    const split = new SplitText(artItalicEl, { type: 'chars', charsClass: 'scrub-char' });
    const chars = split.chars;
    const total = chars.length;
    if (total === 0) return;

    // Set initial decoded state: chars start as scramble placeholders via CSS class
    chars.forEach(ch => {
      ch.classList.add('scrub-char--hidden');
      ch.dataset.real = ch.textContent;
    });

    // Pin hero and map scroll progress → char reveals
    ScrollTrigger.create({
      trigger: '#home',
      start: 'top top',
      end: '+=50%',
      pin: true,
      pinSpacing: false,
      scrub: 1,
      onUpdate: (self) => {
        const decoded = Math.floor(self.progress * total);
        chars.forEach((ch, i) => {
          if (i <= decoded) {
            ch.classList.remove('scrub-char--hidden');
            ch.classList.add('scrub-char--decoded');
          } else {
            ch.classList.remove('scrub-char--decoded');
            ch.classList.add('scrub-char--hidden');
          }
        });
      },
      onLeaveBack: () => {
        // Reset all chars if scrolled back above hero
        chars.forEach(ch => {
          ch.classList.remove('scrub-char--decoded');
          ch.classList.add('scrub-char--hidden');
        });
      }
    });
  }


  /* ====================================================================
     EFFECT 3 — custom-cursor-context-aware (Platinum)
     EXTENDS existing .cursor-pill (does NOT replace DOM structure).
     Adds context-aware label swap for 3 contexts:
       data-cursor="view"    → "VIEW →" (portfolio — already wired)
       data-cursor="select"  → "CHỌN"   (pricing tiers — added below)
       data-cursor="explore" → "→"      (pillar cards — added below)
     Tier: high only (IS_PC + pointer: fine). Touch → skip entirely.
  ==================================================================== */
  function initCustomCursorContext() {
    // Skip on touch / mid-low / reduced motion is OK for cursor (positional only)
    if (IS_TOUCH || !IS_PC) return;

    const pill = document.getElementById('cursor');
    if (!pill) return;

    const pillLabel = pill.querySelector('span');
    if (!pillLabel) return;

    const labelMap = {
      view:    'VIEW →',
      select:  'CHỌN',
      explore: '→',
      // 'true' is legacy value from first build (portfolio) → map to 'view'
      true:    'VIEW →'
    };

    // Extend: add data-cursor="select" to pricing tier cards
    document.querySelectorAll('.tier').forEach(el => {
      if (!el.dataset.cursor) el.dataset.cursor = 'select';
    });

    // Extend: add data-cursor="explore" to pillar cards
    document.querySelectorAll('.pillar-card').forEach(el => {
      if (!el.dataset.cursor) el.dataset.cursor = 'explore';
    });

    // Bind mouseenter (label swap + is-active) + mouseleave (reset + deactivate)
    // to ALL [data-cursor] elements — including new tier/pillar elements added above.
    // Note: initCursorPill() already bound portfolio cards with is-active toggle,
    // but it used the OLD querySelectorAll result (before tier/pillar cards got data-cursor).
    // We must bind ALL [data-cursor] here so new elements get full behavior.
    // Duplicate mouseenter on portfolio cards is harmless (sets same label, same class).
    document.querySelectorAll('[data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', () => {
        const ctx = el.dataset.cursor;
        const label = labelMap[ctx] || 'VIEW →';
        pillLabel.textContent = label;
        pill.classList.add('is-active');
      });
      el.addEventListener('mouseleave', () => {
        // Reset label to default; is-active removal handled here for new elements
        pillLabel.textContent = 'VIEW →';
        pill.classList.remove('is-active');
      });
    });
  }


  /* ====================================================================
     EFFECT 4 — parallax-depth-multi-layer (Platinum)
     Hero section only. 3 layers on scroll Y via CSS custom props:
       Layer 1 (0.3× speed): body::before dot-grid bg
       Layer 2 (0.5× speed): .hero-visual-editorial::before velvet Mode B
       Layer 3 (0.8× speed): .hero-art-typography foreground
     Stops applying past hero height (scrollY > heroHeight).
     Tier: high → 3 layers | mid → 2 layers (skip layer 1) | low/reduced → skip.
  ==================================================================== */
  function initParallaxHero() {
    if (REDUCED_MOTION || TIER === 'low') return;
    if (IS_TOUCH) return; // mobile: background-attachment:fixed already disabled in CSS

    const hero = document.querySelector('#home');
    if (!hero) return;

    const heroVisual = document.querySelector('.hero-visual-editorial');
    const heroArt    = document.querySelector('.hero-art-typography');
    if (!heroVisual && !heroArt) return;

    const layers = [];

    if (TIER === 'high') {
      // Layer 1: body::before — CSS var --bg-parallax-y on body element
      layers.push({ el: document.body, prop: '--bg-parallax-y', speed: 0.3, limit: 200 });
    }
    // Layer 2: .hero-visual-editorial::before — CSS var --velvet-y
    if (heroVisual) {
      layers.push({ el: heroVisual, prop: '--velvet-y', speed: 0.5, limit: 100 });
    }
    // Layer 3: .hero-art-typography — CSS var --art-y (direct transform)
    if (heroArt) {
      layers.push({ el: heroArt, prop: '--art-y', speed: 0.8, limit: 80 });
    }

    let raf = null;
    let heroHeight = hero.offsetHeight;

    const update = () => {
      const scrollY = window.scrollY;
      // Stop applying past hero (frees GPU)
      if (scrollY > heroHeight) {
        layers.forEach(l => l.el.style.setProperty(l.prop, '0px'));
        return;
      }
      layers.forEach(l => {
        const val = Math.min(scrollY * l.speed, l.limit);
        l.el.style.setProperty(l.prop, `${val}px`);
      });
      raf = null;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Recalculate hero height on resize
    window.addEventListener('resize', () => {
      heroHeight = hero.offsetHeight;
    }, { passive: true });

    update(); // initial position
  }


  /* ====================================================================
     EFFECT 5 — split-text-reveal (Gold)
     8 section H2 titles enter with per-char stagger reveal.
     Attribute: data-split-text (already on 4 elements in HTML;
     3 more added dynamically in page-index.js via innerHTML set;
     we patch remaining ones here by ID after DOM is ready).
     REMOVES conflict with PATTERN 2 section-title slide-from-left
     (that pattern still runs in page-index.js but targets .section-title class;
     split-text-reveal targets only [data-split-text] elements — they overlap
     on pillars-title. We handle this via overwrite:'auto' in GSAP).
     Tier: high → per-char | mid → per-word | low/reduced → fade-in only.
  ==================================================================== */
  function initSplitTextReveal() {
    if (!GSAP_OK || !ST_OK || !SPLIT_OK) return;

    // Add data-split-text to the 5 section H2s that weren't marked in HTML
    // (per effects-plan.md §5: cmp-title, proc-title, price-title, why-title, svc-title)
    const idsToMark = ['cmp-title', 'proc-title', 'price-title', 'why-title', 'svc-title'];
    idsToMark.forEach(id => {
      const el = document.getElementById(id);
      if (el && !el.hasAttribute('data-split-text')) {
        el.setAttribute('data-split-text', '');
      }
    });

    const targets = document.querySelectorAll('[data-split-text]');
    if (targets.length === 0) return;

    targets.forEach(el => {
      // Skip hero H1 — it uses custom multi-line slide animation in page-index.js
      if (el.id === 'hero-title') return;
      // Skip if element is empty (content not yet injected by async buildPage)
      if (!el.textContent.trim()) return;

      if (REDUCED_MOTION || TIER === 'low') {
        // Bronze: just make visible
        el.style.opacity = '1';
        return;
      }

      const splitType = TIER === 'high' ? 'chars' : 'words';
      const staggerVal = TIER === 'high' ? 0.03 : 0.06;

      const split = new SplitText(el, {
        type: splitType,
        charsClass: 'split-char',
        wordsClass: 'split-word'
      });

      const splitTargets = TIER === 'high' ? split.chars : split.words;

      // Set initial state hidden (GSAP will animate in)
      gsap.set(splitTargets, { y: 60, opacity: 0 });

      ScrollTrigger.create({
        trigger: el,
        start: 'top bottom-=80',
        once: true,
        onEnter: () => {
          gsap.to(splitTargets, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: staggerVal,
            ease: 'power3.out',
            overwrite: 'auto' // prevent conflict with PATTERN 2 on .section-title
          });
        }
      });
    });
  }


  /* ====================================================================
     EFFECT 6 — magnetic-button (Gold)
     2 CTAs: hero primary [data-magnetic] + scarcity submit [data-magnetic].
     Extends/replaces PATTERN 9 in page-index.js (which targets broader
     .btn-primary class; this targets only [data-magnetic] for precision).
     Proximity radius 80px, strength 0.35, elastic return.
     Tier: high → full magnetic | touch → tap scale | low → CSS hover.
  ==================================================================== */
  function initMagneticButtons() {
    const buttons = document.querySelectorAll('[data-magnetic]');
    if (buttons.length === 0) return;

    if (REDUCED_MOTION) {
      buttons.forEach(btn => btn.classList.add('is-bronze'));
      return;
    }

    const lowMemory = (navigator.deviceMemory || 8) < 4;
    const lowCores  = (navigator.hardwareConcurrency || 8) < 4;
    const isLowDevice = lowMemory || lowCores;

    if (isLowDevice || TIER === 'low') {
      buttons.forEach(btn => btn.classList.add('is-bronze'));
      return;
    }

    // Touch tier: tap scale feedback only
    if (IS_TOUCH) {
      buttons.forEach(btn => {
        btn.addEventListener('touchstart', () => btn.classList.add('is-tap-active'), { passive: true });
        btn.addEventListener('touchend',   () => btn.classList.remove('is-tap-active'), { passive: true });
      });
      return;
    }

    // High tier: full magnetic (pointer proximity)
    let pointerType = null;

    buttons.forEach(btn => {
      const strength = parseFloat(btn.dataset.magneticStrength) || 0.35;
      const range    = parseFloat(btn.dataset.magneticRange)    || 80;
      let raf     = null;
      let inRange = false;

      const onPointerMove = (e) => {
        if (!pointerType) pointerType = e.pointerType;
        if (pointerType === 'touch') return;

        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width  / 2;
        const cy = rect.top  + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);

        if (dist > range) {
          if (inRange) {
            inRange = false;
            btn.classList.remove('is-magnetic-active');
            btn.style.transform = '';
          }
          return;
        }

        inRange = true;
        btn.classList.add('is-magnetic-active');

        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          btn.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
        });
      };

      const onPointerLeave = () => {
        inRange = false;
        btn.classList.remove('is-magnetic-active');
        btn.style.transform = '';
      };

      // IO gate: only listen when button is near viewport
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          document.addEventListener('pointermove', onPointerMove, { passive: true });
        } else {
          document.removeEventListener('pointermove', onPointerMove);
          onPointerLeave();
        }
      }, { rootMargin: '100px' });
      io.observe(btn);
    });
  }


  /* ====================================================================
     EFFECT 7 — card-tilt-3d (Gold)
     7 cards: 4 pillar-cards + 3 pricing tier cards.
     data-tilt attribute added to these elements by JS renderPillars()
     and renderPricing() — OR we add them here after DOM build.
     ±8deg, perspective 1000px, shadow follow.
     Tier: high → full tilt | mid/touch → tap-scale | low/reduced → CSS hover.
  ==================================================================== */
  function initCardTilt3D() {
    // Add data-tilt to pillar cards + tier cards if not already present
    document.querySelectorAll('.pillar-card').forEach(el => {
      if (!el.hasAttribute('data-tilt')) el.setAttribute('data-tilt', '');
    });
    document.querySelectorAll('.tier').forEach(el => {
      if (!el.hasAttribute('data-tilt')) el.setAttribute('data-tilt', '');
    });

    const cards = document.querySelectorAll('[data-tilt]');
    if (cards.length === 0) return;

    if (REDUCED_MOTION || TIER === 'low') {
      cards.forEach(c => c.classList.add('tilt-bronze'));
      return;
    }

    // Touch or mid tier: tap scale
    if (IS_TOUCH || TIER === 'mid') {
      cards.forEach(card => {
        card.addEventListener('touchstart', () => card.classList.add('tilt-tap-active'), { passive: true });
        card.addEventListener('touchend',   () => card.classList.remove('tilt-tap-active'), { passive: true });
      });
      return;
    }

    // High tier: full 3D tilt
    cards.forEach(card => {
      const maxAngle   = parseFloat(card.dataset.tiltMax) || 8;
      const perspective = parseFloat(card.dataset.tiltPerspective) || 1000;
      let raf = null;

      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width  / 2;
        const cy = rect.top  + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width  / 2); // -1 → 1
        const dy = (e.clientY - cy) / (rect.height / 2); // -1 → 1

        const rotX = -dy * maxAngle;
        const rotY =  dx * maxAngle;
        const shadowX = -dx * 16;
        const shadowY = -dy * 16 + 12;

        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          card.style.transform  = `perspective(${perspective}px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
          card.style.boxShadow  = `${shadowX}px ${shadowY}px 40px -8px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,160,66,0.08)`;
        });
      };

      const onLeave = () => {
        if (raf) cancelAnimationFrame(raf);
        card.style.transform = '';
        card.style.boxShadow = '';
      };

      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          card.addEventListener('mousemove',  onMove,   { passive: true });
          card.addEventListener('mouseleave', onLeave);
        } else {
          card.removeEventListener('mousemove',  onMove);
          card.removeEventListener('mouseleave', onLeave);
          onLeave();
        }
      }, { rootMargin: '50px' });
      io.observe(card);
    });
  }


  /* ====================================================================
     EFFECT 8 — text-scramble (Gold)
     Stats numbers only (.stat-number span[data-count]).
     Sequence: 0.6s char scramble → hand off to existing GSAP counter
     (existing PATTERN 12 in page-index.js handles the actual count-up).
     data-scramble attribute added to stat number spans here.
     Triggered once on ScrollTrigger.create() when stats section enters.
     Tier: high → full 0.6s scramble | mid → 0.3s | low/reduced → skip.
  ==================================================================== */
  function initTextScramble() {
    if (REDUCED_MOTION || TIER === 'low') return;
    if (!ST_OK || !GSAP_OK) return;

    const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#';
    const SPEED = TIER === 'mid' ? 50 : 30; // ms per frame

    class StatScramble {
      constructor(el) {
        this.el = el;
        this.finalText = el.textContent.trim();
        this.frame = 0;
        this.queue = [];
        this.raf = null;
      }

      start(duration, onComplete) {
        const len = this.finalText.length;
        // Build scramble queue
        this.queue = [];
        for (let i = 0; i < len; i++) {
          const to    = this.finalText[i];
          const start = Math.floor(Math.random() * 20);
          const end   = start + Math.floor(Math.random() * 30);
          this.queue.push({ to, start, end, char: null });
        }
        this.frame = 0;
        this.resolve = onComplete;
        this.tick();
      }

      tick() {
        let output  = '';
        let complete = 0;
        for (let i = 0; i < this.queue.length; i++) {
          const item = this.queue[i];
          if (this.frame >= item.end) {
            complete++;
            output += item.to;
          } else if (this.frame >= item.start) {
            if (!item.char || Math.random() < 0.28) {
              item.char = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            }
            output += `<span class="scramble-char" aria-hidden="true">${item.char}</span>`;
          } else {
            output += '<span aria-hidden="true">·</span>';
          }
        }
        this.el.innerHTML = output;

        if (complete === this.queue.length) {
          // All chars resolved — restore numeric text for GSAP counter to take over
          this.el.textContent = this.finalText;
          if (this.resolve) this.resolve();
        } else {
          this.frame++;
          this.raf = setTimeout(() => requestAnimationFrame(() => this.tick()), SPEED);
        }
      }
    }

    // Find stat number spans (injected by buildPage() stats block)
    // We need to wait until they exist — use a MutationObserver or just a short wait
    const tryInit = () => {
      const statSpans = document.querySelectorAll('.stat-number span[data-count]');
      if (statSpans.length === 0) return false;

      // Mark for scramble
      statSpans.forEach(span => span.setAttribute('data-scramble', ''));

      ScrollTrigger.create({
        trigger: '.stats-section.stats-dark',
        start: 'top bottom-=100',
        once: true,
        onEnter: () => {
          statSpans.forEach((span, idx) => {
            // Stagger scramble start by 150ms per stat
            setTimeout(() => {
              const fx = new StatScramble(span);
              // Capture final value before scramble clobbers it
              const finalVal = span.dataset.count;
              fx.start(600, () => {
                // After scramble resolves, GSAP counter (PATTERN 12 in page-index.js)
                // already has a ScrollTrigger that ticks the number.
                // We just restore the span text so GSAP counter can read data-count.
                span.textContent = '0';
              });
            }, idx * 150);
          });
        }
      });
      return true;
    };

    // Try immediately, then retry after DOM settles (buildPage is async)
    if (!tryInit()) {
      // Observe stats grid for content injection
      const statsGrid = document.getElementById('stats-grid');
      if (statsGrid) {
        const mo = new MutationObserver(() => {
          if (tryInit()) mo.disconnect();
        });
        mo.observe(statsGrid, { childList: true, subtree: true });
      }
    }
  }


  /* ====================================================================
     EFFECT 9 — image-hover-suite: lift (Silver)
     Portfolio thumbnails (.folio-feature img, .folio-vert img, .folio-small img).
     CSS-only hover effect: translate3d(0, -8px, 0) + shadow elevation.
     data-hover="lift" added to folio containers here.
     JS just adds the attribute; CSS handles the rest.
  ==================================================================== */
  function initImageLift() {
    // Add data-hover="lift" to portfolio folio containers
    document.querySelectorAll('.folio-feature, .folio-vert, .folio-small').forEach(el => {
      el.dataset.hover = 'lift';
    });
    // Effect is purely CSS — no JS animation needed.
    // CSS rules added in style.css effects section (see Effect 9 in effects addition block).
  }


  /* ====================================================================
     EFFECT 10 — image-hover-suite: bright (Silver)
     Partner logos (.partner-logo spans).
     CSS-only: opacity 0.55 → 1.0 + brightness(1.05) + saturate(1.1).
     data-hover="bright" added to logos here; CSS handles the rest.
  ==================================================================== */
  function initImageBright() {
    // Add data-hover="bright" to all partner logo spans
    document.querySelectorAll('.partner-logo').forEach(el => {
      el.dataset.hover = 'bright';
    });
    // CSS-only — no JS animation.
  }


  /* ====================================================================
     INITIALIZATION — wait for DOM + buildPage() to complete
     page-index.js calls buildPage() synchronously inside init(),
     which runs immediately on script evaluation (last line: init()).
     By the time effects-motion.js runs (deferred, after page-index.js),
     DOM elements exist. We use DOMContentLoaded as safety net.
  ==================================================================== */
  function initAllEffects() {
    // Order matters: loading choreography first (changes DOM state),
    // then parallax (attaches scroll listener), then others.

    initLoadingChoreography();  // Effect 1 — Platinum
    initScrollScrubbing();      // Effect 2 — Platinum (requires GSAP + SplitText)
    initCustomCursorContext();  // Effect 3 — Platinum (extends existing cursor)
    initParallaxHero();         // Effect 4 — Platinum (RAF scroll listener)
    initSplitTextReveal();      // Effect 5 — Gold (GSAP SplitText)
    initMagneticButtons();      // Effect 6 — Gold (pointer proximity)
    initCardTilt3D();           // Effect 7 — Gold (3D mousemove tilt)
    initTextScramble();         // Effect 8 — Gold (char cycling + counter)
    initImageLift();            // Effect 9 — Silver (CSS + data-hover attr)
    initImageBright();          // Effect 10 — Silver (CSS + data-hover attr)

    // Refresh ScrollTrigger after all effects registered
    // (some effects add new triggers after page-index.js already called refresh)
    if (GSAP_OK && ST_OK) {
      setTimeout(() => ScrollTrigger.refresh(), 200);
    }
  }

  // Gate init behind document.fonts.ready — prevents SplitText "called before fonts loaded"
  // warnings (×17 in console). Be Vietnam Pro must be metric-ready before per-char split.
  // Fallback: 2s timeout in case fonts API unavailable or stalls.
  function startInit() {
    const fontsReady = (document.fonts && document.fonts.ready)
      ? document.fonts.ready
      : Promise.resolve();
    Promise.race([
      fontsReady,
      new Promise(resolve => setTimeout(resolve, 2000)),
    ]).then(() => {
      requestAnimationFrame(initAllEffects);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startInit);
  } else {
    startInit();
  }

})();
