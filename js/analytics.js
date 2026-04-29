'use strict';

// TODO: Replace GA4_MEASUREMENT_ID with real ID from Google Analytics
// Get it from: analytics.google.com → Admin → Data Streams → Web Stream → Measurement ID
const GA4_ID = 'G-XXXXXXXXXX'; // ← REPLACE THIS

/* ── Utility: throttle ── */
function throttle(fn, ms) {
  let last = 0;
  return function(...args) {
    const now = Date.now();
    if (now - last >= ms) { last = now; fn(...args); }
  };
}

function gtag() { window.dataLayer = window.dataLayer || []; window.dataLayer.push(arguments); }

/* ── 1. Scroll depth ── */
(function() {
  const depths = [25, 50, 75, 90, 100];
  const fired = new Set();
  window.addEventListener('scroll', throttle(() => {
    const pct = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
    depths.forEach(d => {
      if (pct >= d && !fired.has(d)) {
        fired.add(d);
        gtag('event', 'scroll_depth', { percent: d, page_path: location.pathname });
      }
    });
  }, 300), { passive: true });
})();

/* ── 2. Time on page milestones ── */
const pageStart = Date.now();
[15, 30, 60, 120, 300].forEach(sec => {
  setTimeout(() => {
    gtag('event', 'time_on_page', { threshold_seconds: sec, page_path: location.pathname });
  }, sec * 1000);
});

/* ── 3. CTA tracking — add data-cta + data-section to CTA elements in HTML ── */
document.querySelectorAll('[data-cta]').forEach(el => {
  el.addEventListener('click', () => {
    gtag('event', 'cta_click', {
      cta_id: el.dataset.cta,
      cta_text: el.textContent.trim().slice(0, 50),
      cta_section: el.dataset.section || el.closest('[data-section]')?.dataset.section || 'unknown',
      page_path: location.pathname
    });
  });
});

/* ── 4. Form tracking ── */
document.querySelectorAll('form').forEach(form => {
  let started = false;
  let submitting = false;

  form.addEventListener('focusin', () => {
    if (started) return;
    started = true;
    gtag('event', 'form_start', { form_id: form.id || 'unnamed', page_path: location.pathname });
  });

  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => {
      if (field.value) {
        gtag('event', 'form_field_complete', { form_id: form.id, field_name: field.name });
      }
    });
  });

  form.addEventListener('submit', () => {
    submitting = true;
    gtag('event', 'form_submit', { form_id: form.id, page_path: location.pathname });
  });

  window.addEventListener('beforeunload', () => {
    if (started && !submitting) {
      navigator.sendBeacon?.('/api/analytics', JSON.stringify({
        event: 'form_abandon', form_id: form.id, page: location.pathname
      }));
    }
  });
});

/* ── 5. VN-specific: phone + Zalo + Maps ── */
document.querySelectorAll('a[href^="tel:"]').forEach(a => {
  a.addEventListener('click', () => {
    gtag('event', 'phone_click', { phone: a.href.replace('tel:', ''), page_path: location.pathname });
  });
});

document.querySelectorAll('a[href*="zalo.me"]').forEach(a => {
  a.addEventListener('click', () => {
    gtag('event', 'zalo_click', { page_path: location.pathname });
  });
});

document.querySelectorAll('a[href*="maps.google"], a[href*="goo.gl/maps"]').forEach(a => {
  a.addEventListener('click', () => {
    gtag('event', 'maps_click', { page_path: location.pathname });
  });
});

document.querySelectorAll('a[href*="m.me"], a[href*="messenger.com"]').forEach(a => {
  a.addEventListener('click', () => {
    gtag('event', 'messenger_click', { page_path: location.pathname });
  });
});

/* ── 6. External link tracking ── */
document.querySelectorAll('a[href^="http"]').forEach(a => {
  if (!a.href.includes(location.hostname)) {
    a.addEventListener('click', () => {
      gtag('event', 'external_link_click', { destination: a.href, page_path: location.pathname });
    });
  }
});

/* ── 7. File download tracking ── */
document.querySelectorAll('a[href$=".pdf"], a[href$=".zip"], a[href$=".docx"]').forEach(a => {
  a.addEventListener('click', () => {
    gtag('event', 'file_download', { file_name: a.href.split('/').pop(), page_path: location.pathname });
  });
});

/* ── 8. JS error tracking ── */
window.addEventListener('error', e => {
  gtag('event', 'error_javascript', {
    error_message: e.message?.slice(0, 100),
    error_filename: e.filename,
    page_path: location.pathname
  });
});

/* ── 9. Slow page alert (LCP > 3s via PerformanceObserver) ── */
if (typeof PerformanceObserver !== 'undefined') {
  try {
    new PerformanceObserver(list => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      if (lcp?.startTime > 3000) {
        gtag('event', 'slow_page', { lcp_ms: Math.round(lcp.startTime), page_path: location.pathname });
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (_) {}
}
