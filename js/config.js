// ── Safari perf firewall — detect Safari early so CSS can disable effects
// that cause scroll jank (background-attachment: fixed, backdrop-filter,
// mix-blend-mode, deep filter chains). Must run BEFORE first paint of any
// scroll-bound section.
(function _detectSafari() {
  const ua = navigator.userAgent;
  // Match Safari (desktop + iOS) but exclude Chrome, Chromium, Edge, Firefox-iOS, Android browsers
  const isSafari = /^((?!chrome|chromium|android|edg|crios|fxios|opr).)*safari/i.test(ua);
  if (isSafari) {
    document.documentElement.classList.add('is-safari');
  }
})();

const SUPABASE_URL     = 'https://jllirmrpkayiyajwebbr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsbGlybXJwa2F5aXlhandlYmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4MDI5NDMsImV4cCI6MjA5MjM3ODk0M30.1_DZoCymoVUwdPrv_cZQPkF4NT9Rcucw7kvONvcCs0A';
const HW_FN_BASE       = `${SUPABASE_URL}/functions/v1`;

// Lazy supabase loader — defer 35KB bundle until actually needed.
// Marketing pages (index/about/contact/pricing/portfolio/guides/article/service)
// don't ship the <script src="supabase.min.js"> tag; this loader injects it on demand.
// Auth pages (auth/dashboard/new-project/quote/success) keep the eager script tag
// so window.supabase is ready immediately when this loader runs.
let _sbPromise = null;
function loadSb() {
  if (_sbPromise) return _sbPromise;
  _sbPromise = new Promise((resolve, reject) => {
    if (window.supabase) {
      window._sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      resolve(window._sb);
      return;
    }
    const s = document.createElement('script');
    s.src = 'js/supabase.min.js';
    s.defer = true;
    s.onload = () => {
      window._sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      resolve(window._sb);
    };
    s.onerror = () => reject(new Error('supabase load failed'));
    document.head.appendChild(s);
  });
  return _sbPromise;
}

// Pre-warm only if user has an existing session token (logged-in user)
// Anonymous visitors get zero supabase bytes until they trigger a form/auth action.
(function _prewarmSbIfSession() {
  const hasSession = Object.keys(localStorage).some(k => k.startsWith('sb-') && k.endsWith('-auth-token'));
  if (hasSession) loadSb();
})();

let currentLang = localStorage.getItem('hw_lang') || 'vi';

const i18n = {
  vi: {
    // Nav
    nav_home:       'Trang chủ',
    nav_portfolio:  'Dự án',
    nav_pricing:    'Bảng giá',
    nav_guides:     'Hướng dẫn',
    nav_about:      'Về chúng tôi',
    nav_contact:    'Liên hệ',
    nav_login:      'Đăng nhập',
    nav_dashboard:  'Dashboard',
    nav_logout:     'Đăng xuất',
    nav_new:        'Yêu cầu báo giá',

    // Hero — editorial direction (replaces v3 generic "platform" eyebrow + generic "tư vấn miễn phí" CTA)
    // P2b: Peer revision — condense 5 lines → 2 lines per "câu slogan tôi muốn chỉ có 2 hàng thôi"
    // line-1: full first sentence / line-2: second sentence with gold-em on "phát triển kinh doanh"
    hero_eyebrow:   'Studio Hà Nội · Issue 01 · 2026',
    hero_title_1:   'Ở đây không chỉ có web đẹp',
    hero_title_2:   'phát triển kinh doanh',
    hero_title_3:   '',
    hero_title_4:   '',
    hero_title_5:   '',
    hero_title_6:   '',
    hero_sub:       'Bốn trụ cột đi cùng nhau cho doanh nghiệp Việt: website chuyển đổi cao — quảng cáo tối ưu chi phí — SEO bền vững top Google — chiến lược tăng trưởng có lộ trình.',
    hero_cta_1:     'Đặt buổi 90 phút phân tích định vị',
    hero_cta_2:     'Xem 30 dự án đã bàn giao',
    hero_cta_micro: 'qua Zoom · không cam kết · yên tâm phản hồi trong 4h',  /* C4 FIX: LF8 "yên tâm" trigger word (C-003) */
    hero_visual_caption: 'Studio Hà Nội · v5.1 dark luxury', // content-output.md §3 polish

    // Services
    svc_label:      'Dịch vụ',
    svc_title:      'Hệ sinh thái',
    svc_title_em:   'số toàn diện',
    svc_desc:       'Từ website, marketing, hosting đến phần mềm và đào tạo — tất cả những gì doanh nghiệp Việt cần để bứt phá trên không gian số.',

    // Stats
    stat_projects:  'Dự án đã bàn giao',
    stat_clients:   'Khách hàng hài lòng',
    stat_years:     'Năm kinh nghiệm',
    stat_uptime:    'Uptime cam kết',

    // Why us
    why_label:      'Vì sao chọn HAYWEB',
    why_title:      'Đẳng cấp khác biệt',
    why_title_em:   'từ ngày đầu tiên',
    why_desc:       'Từ báo giá đến bàn giao trong 5 phút — quy trình minh bạch, tốc độ vượt trội, kết quả đo được.', // content-output.md §3 polish: "5 phút" + "đo được"

    // Pricing
    // B2 FIX: Add reassurance subtitle "giá xứng đáng..." below existing desc
    price_label:    'Bảng giá',
    price_title:    'Giá cố định. Không phí ẩn.', // content-output.md §3 pricing H2 polish
    price_title_em: 'Bàn giao đúng hạn.',
    price_desc:     'Không phí ẩn, không bất ngờ. Chọn gói phù hợp hoặc liên hệ để nhận tư vấn cá nhân.',
    price_reassurance: 'Giá xứng đáng với những gì bạn nhận được — và hơn thế nữa.',
    price_starter:  'Starter',
    price_pro:      'Professional',
    price_ent:      'Enterprise',
    price_cta_s:    'Khởi tạo dự án →',       // peer-feedback: B2B premium tone, less pushy than "ngay"
    price_cta_p:    'Yêu cầu báo giá →',      // peer-feedback: polite formal verb
    price_cta_e:    'Đặt lịch tư vấn →',      // peer-feedback: shorter, professional

    // Portfolio
    port_label:     'Portfolio',
    port_title:     'Những dự án',
    port_title_em:  'nói thay lời',
    port_viewall:   'Xem tất cả dự án →',

    // Testimonials
    testi_label:    'Khách hàng nói gì',
    testi_title:    'Uy tín từ',
    testi_title_em: 'kết quả thực',

    // CTA
    cta_title:      'Sẵn sàng tạo nên',
    cta_title_em:   'điều phi thường?',
    cta_desc:       'Điền form — nhận báo giá trong 5 phút. Không cam kết, không phí tư vấn.',
    cta_btn:        'Bắt đầu dự án của bạn',

    // Footer
    footer_desc:    'Thiết kế web chuyên nghiệp tại Hà Nội. Chúng tôi kiến tạo trải nghiệm số đẳng cấp cho doanh nghiệp Việt.',
    footer_copy:    '© 2026 HAYWEB. Bảo lưu mọi quyền.',
    footer_links:   'Liên kết',
    footer_services:'Dịch vụ',
    footer_contact: 'Liên hệ',

    // Auth
    auth_login:     'Đăng nhập',
    auth_register:  'Đăng ký',
    auth_email:     'Email',
    auth_password:  'Mật khẩu',
    auth_name:      'Họ tên',
    auth_google:    'Tiếp tục với Google',
    auth_have_acc:  'Đã có tài khoản?',
    auth_no_acc:    'Chưa có tài khoản?',
    auth_quote_msg: '"Mỗi website là một cơ hội để kể câu chuyện thương hiệu của bạn."',

    // Dashboard
    dash_title:     'Dashboard',
    dash_welcome:   'Xin chào,',
    dash_projects:  'Dự án của bạn',
    dash_new:       'Dự án mới',
    dash_total:     'Tổng dự án',
    dash_pending:   'Chờ xử lý',
    dash_paid:      'Đã thanh toán',
    dash_signed:    'Đã ký',
    dash_no_proj:   'Bạn chưa có dự án nào. Hãy bắt đầu ngay!',
    dash_view:      'Xem báo giá',

    // New project
    np_title:       'Yêu cầu báo giá',
    np_loading:     'Chuyên viên đang phân tích yêu cầu của bạn...',
    np_step1:       'Thông tin',
    np_step2:       'Tính năng',
    np_step3:       'Thiết kế',
    np_step4:       'Xác nhận',
    np_next:        'Tiếp tục →',
    np_prev:        '← Quay lại',
    np_submit:      'Nhận báo giá →',

    // Quote
    quote_title:    'Báo giá dự án',
    quote_by:       'Đề xuất từ đội ngũ HAYWEB',
    quote_sign:     'Ký xác nhận',
    quote_clear:    'Xóa chữ ký',
    quote_pay:      'Thanh toán & Xác nhận',
    quote_stripe:   'Thẻ quốc tế',
    quote_payos:    'QR / Banking',

    // Success
    succ_title:     'Đã xác nhận thành công!',
    succ_desc:      'Chúng tôi sẽ liên hệ trong vòng 24 giờ để triển khai dự án.',
    succ_back:      'Về Dashboard',

    // Contact
    con_title:      'Liên hệ với chúng tôi',
    con_name:       'Họ tên',
    con_email:      'Email',
    con_phone:      'Số điện thoại',
    con_msg:        'Nội dung',
    con_send:       'Gửi tin nhắn',
    con_sent:       'Tin nhắn đã gửi! Chúng tôi sẽ phản hồi sớm.',

    // Pillars (4 trụ cột)
    pillars_label:    'Bốn trụ cột tăng trưởng',
    pillars_title:    'Bốn mảnh ghép',
    pillars_title_em: 'của một doanh nghiệp lớn lên',
    pillars_desc:     'Hầu hết doanh nghiệp Việt chi tiền cho 1 mảnh — rồi tự hỏi vì sao không hiệu quả. Bốn mảnh phải đi cùng nhau.',

    // Comparison
    cmp_label:    'So sánh thẳng',
    cmp_title:    'Đa số agency dừng ở',
    cmp_title_em: 'việc bàn giao file',
    cmp_them:     'Đa số agency Việt Nam',
    cmp_us:       'HAYWEB',

    // Scarcity CTA Band — editorial outcome-specific (replaces generic "tư vấn miễn phí")
    sc_label:        'Buổi định vị 90 phút',
    sc_title:        'Hôm nay còn',
    sc_title_em:     'buổi trong lịch',
    sc_desc:         'Buổi 1-1 qua Zoom: phân tích định vị → bản đồ khác biệt 1 trang → roadmap 3-6-12 tháng. Sau buổi, mọi quyết định web/ads/SEO đều có lý do.',
    sc_cta_calendly: 'Đặt buổi qua Calendly →',
    sc_cta_form:     'Hoặc để lại thông tin',
    sc_full_title:   'Lịch hôm nay đã kín 5/5 buổi',
    sc_full_desc:    'Lịch đã kín — nhưng để lại thông tin và sẽ có buổi ưu tiên cho ngày mai. Email xác nhận trong 4h.', // content-output.md §3 polish
    sc_availability: 'Lịch mở mỗi ngày làm việc · 9:00 – 17:00',
    footer_colophon: 'Set in Be Vietnam Pro & JetBrains Mono · Xây tại Hà Nội · v5.1', // content-output.md §3 add "· v5.1"
    nav_meta_year:   'CIRCA 2026',
    nav_meta_city:   'HÀ NỘI',
    sc_form_name:    'Họ tên',
    sc_form_email:   'Email',
    sc_form_phone:   'Số điện thoại (tuỳ chọn)',
    sc_form_submit:  'Gửi yêu cầu',
    sc_thx_booked:   'Đã ghi nhận. Chúng tôi sẽ liên hệ trong 30 phút làm việc.',
    sc_thx_waitlist: 'Bạn đã vào hàng chờ ngày mai. Email xác nhận đã gửi.',

    // Editorial v4 additions
    stats_meta:        'Số liệu cập nhật 04/2026 · Audit nội bộ',
    why_side_caption:  'conversion đo được — A/B test, báo cáo ROI hàng tuần.', // hidden via CSS .side-caption{display:none} per peer 2026-05-06; kept value to avoid t() key-fallback rendering

    // Common
    loading:        'Đang tải...',
    error:          'Đã có lỗi xảy ra. Vui lòng thử lại.',
    or:             'hoặc',
  },

  en: {
    nav_home:       'Home',
    nav_portfolio:  'Portfolio',
    nav_pricing:    'Pricing',
    nav_guides:     'Guides',
    nav_about:      'About',
    nav_contact:    'Contact',
    nav_login:      'Login',
    nav_dashboard:  'Dashboard',
    nav_logout:     'Logout',
    nav_new:        'Get a Quote',

    // P2b: condensed to 2-line slogan (EN variant)
    hero_eyebrow:   'Studio Hanoi · Issue 01 · 2026',
    hero_title_1:   'Not just beautiful websites',
    hero_title_2:   'business growth',
    hero_title_3:   '',
    hero_title_4:   '',
    hero_title_5:   '',
    hero_title_6:   '',
    hero_sub:       'Four pillars working as one for Vietnamese businesses: high-converting web — cost-optimized ads — sustainable SEO to top of Google — growth strategy with a roadmap.',
    hero_cta_1:     'Book a 90-min positioning workshop',
    hero_cta_2:     'See 30 delivered projects',
    hero_cta_micro: 'Over Zoom · no commitment · peace of mind, response within 4h',
    hero_visual_caption: 'Studio Hanoi · v5.1 dark luxury', // content-output.md §3 polish

    svc_label:      'Services',
    svc_title:      'A complete',
    svc_title_em:   'digital ecosystem',
    svc_desc:       'From websites, marketing and hosting to custom software and training — everything Vietnamese businesses need to win online.',

    stat_projects:  'Projects Delivered',
    stat_clients:   'Happy Clients',
    stat_years:     'Years Experience',
    stat_uptime:    'Uptime Guaranteed',

    why_label:      'Why HAYWEB',
    why_title:      'A different class',
    why_title_em:   'from day one',
    why_desc:       'From quote to delivery in 5 minutes — transparent process, superior speed, measurable results.', // content-output.md §3 polish: "5 min" + "measurable"

    // B2 FIX: Add reassurance subtitle (EN variant)
    price_label:    'Pricing',
    price_title:    'Fixed price. No hidden fees.', // content-output.md §3 polish
    price_title_em: 'On-time delivery.',
    price_desc:     'No hidden fees, no surprises. Choose a plan or contact us for a custom quote.',
    price_reassurance: 'You get more than what you pay for — and that\'s a promise.',
    price_starter:  'Starter',
    price_pro:      'Professional',
    price_ent:      'Enterprise',
    price_cta_s:    'Start a project →',         // peer-feedback: B2B premium tone
    price_cta_p:    'Request a quote →',         // peer-feedback: polite formal verb
    price_cta_e:    'Book a consultation →',     // peer-feedback: shorter, professional

    port_label:     'Portfolio',
    port_title:     'Projects that',
    port_title_em:  'speak for themselves',
    port_viewall:   'View all projects →',

    testi_label:    'What clients say',
    testi_title:    'Trust built on',
    testi_title_em: 'real results',

    cta_title:      'Ready to create',
    cta_title_em:   'something extraordinary?',
    cta_desc:       'Fill the form — get a detailed quote in 5 minutes. No commitment, no consulting fee.',
    cta_btn:        'Start your project',

    footer_desc:    'We build high-converting digital experiences for Vietnamese businesses.', // content-output.md §3 polish
    footer_copy:    '© 2026 HAYWEB. All rights reserved.',
    footer_links:   'Links',
    footer_services:'Services',
    footer_contact: 'Contact',

    auth_login:     'Login',
    auth_register:  'Create Account',
    auth_email:     'Email',
    auth_password:  'Password',
    auth_name:      'Full name',
    auth_google:    'Continue with Google',
    auth_have_acc:  'Already have an account?',
    auth_no_acc:    'Don\'t have an account?',
    auth_quote_msg: '"Every website is an opportunity to tell your brand\'s story."',

    dash_title:     'Dashboard',
    dash_welcome:   'Welcome,',
    dash_projects:  'Your Projects',
    dash_new:       'New Project',
    dash_total:     'Total Projects',
    dash_pending:   'Pending',
    dash_paid:      'Paid',
    dash_signed:    'Signed',
    dash_no_proj:   'You have no projects yet. Start one now!',
    dash_view:      'View Quote',

    np_title:       'Request a Quote',
    np_loading:     'Our team is analyzing your requirements...',
    np_step1:       'Info',
    np_step2:       'Features',
    np_step3:       'Design',
    np_step4:       'Review',
    np_next:        'Next →',
    np_prev:        '← Back',
    np_submit:      'Get Quote →',

    quote_title:    'Project Quote',
    quote_by:       'Proposal from the HAYWEB team',
    quote_sign:     'Sign to Confirm',
    quote_clear:    'Clear Signature',
    quote_pay:      'Pay & Confirm',
    quote_stripe:   'International Card',
    quote_payos:    'QR / Banking',

    succ_title:     'Successfully Confirmed!',
    succ_desc:      'We will contact you within 24 hours to begin your project.',
    succ_back:      'Back to Dashboard',

    con_title:      'Get in Touch',
    con_name:       'Full name',
    con_email:      'Email',
    con_phone:      'Phone number',
    con_msg:        'Message',
    con_send:       'Send Message',
    con_sent:       'Message sent! We\'ll respond shortly.',

    pillars_label:    'Four growth pillars',
    pillars_title:    'Four pieces',
    pillars_title_em: 'a growing business needs',
    pillars_desc:     'Most Vietnamese businesses pay for one piece — then wonder why nothing works. The four must work together.',

    cmp_label:    'Direct comparison',
    cmp_title:    'Most agencies stop at',
    cmp_title_em: 'handing over files',
    cmp_them:     'Most Vietnam agencies',
    cmp_us:       'HAYWEB',

    sc_label:        '90-min positioning workshop',
    sc_title:        'Today',
    sc_title_em:     'sessions remain on the calendar',
    sc_desc:         '1-on-1 Zoom session: positioning analysis → 1-page differentiation map → 3-6-12 month roadmap. After this, every web/ads/SEO decision has a reason.',
    sc_cta_calendly: 'Book on Calendly →',
    sc_cta_form:     'Or leave your details',
    sc_full_title:   'Today\'s calendar is fully booked (5/5)',
    sc_full_desc:    'Calendar is full — leave your details and we\'ll prioritize a slot for tomorrow. Confirmation email within 4h.', // content-output.md §3 polish
    sc_availability: 'Open every working day · 9:00 – 17:00',
    footer_colophon: 'Set in Be Vietnam Pro & JetBrains Mono · Built in Hà Nội · v5.1', // content-output.md §3 add "· v5.1"
    nav_meta_year:   'CIRCA 2026',
    nav_meta_city:   'HÀ NỘI',
    sc_form_name:    'Full name',
    sc_form_email:   'Email',
    sc_form_phone:   'Phone (optional)',
    sc_form_submit:  'Submit request',
    sc_thx_booked:   'Recorded. We\'ll contact you within 30 working minutes.',
    sc_thx_waitlist: 'You\'re on tomorrow\'s waitlist. Confirmation email sent.',

    // Editorial v4 additions
    stats_meta:        'Numbers updated 04/2026 · Audited internally',
    why_side_caption:  'measurable conversion — A/B test, weekly ROI report.', // hidden via CSS per peer 2026-05-06

    loading:        'Loading...',
    error:          'An error occurred. Please try again.',
    or:             'or',
  }
};

function t(key) {
  return (i18n[currentLang] && i18n[currentLang][key]) || key;
}

function toggleLang() {
  currentLang = currentLang === 'vi' ? 'en' : 'vi';
  localStorage.setItem('hw_lang', currentLang);
  location.reload();
}

async function getUser() {
  // Anonymous visitors: skip supabase load entirely (saves 35KB + parse time).
  const hasSession = Object.keys(localStorage).some(k => k.startsWith('sb-') && k.endsWith('-auth-token'));
  if (!hasSession) return null;
  const sb = await loadSb();
  const { data: { user } } = await sb.auth.getUser();
  return user;
}

async function requireAuth() {
  const user = await getUser();
  if (!user) { window.location.href = '/auth.html'; return null; }
  return user;
}

async function signOut() {
  const sb = await loadSb();
  await sb.auth.signOut();
  window.location.href = '/index.html';
}

async function renderNav(activePage) {
  const user = await getUser();
  const nav = document.getElementById('nav');
  if (!nav) return;

  const navLinksHTML = `
    <a href="/index.html" ${activePage==='home'?'class="active"':''}>${t('nav_home')}</a>
    <a href="/portfolio.html" ${activePage==='portfolio'?'class="active"':''}>${t('nav_portfolio')}</a>
    <a href="/pricing.html" ${activePage==='pricing'?'class="active"':''}>${t('nav_pricing')}</a>
    <a href="/guides.html" ${activePage==='guides'?'class="active"':''}>${t('nav_guides')}</a>
    <a href="/about.html" ${activePage==='about'?'class="active"':''}>${t('nav_about')}</a>
    <a href="/contact.html" ${activePage==='contact'?'class="active"':''}>${t('nav_contact')}</a>
    ${user
      ? `<a href="/dashboard.html" ${activePage==='dashboard'?'class="active"':''}>${t('nav_dashboard')}</a>
         <button class="btn-ghost" id="nav-signout-btn">${t('nav_logout')}</button>`
      : `<a href="/auth.html" class="nav-cta">${t('nav_login')}</a>`
    }
    <button class="btn-ghost" id="nav-lang-btn" style="font-weight:600;color:var(--silver)">${currentLang==='vi'?'EN':'VI'}</button>
  `;

  nav.innerHTML = `
    <a href="/index.html" class="nav-brand">HAY<span>WEB</span></a>
    <div class="nav-meta" aria-hidden="true">
      <span class="nav-meta-text">${t('nav_meta_year')}</span>
      <span class="nav-divider">·</span>
      <span class="nav-meta-text">${t('nav_meta_city')}</span>
    </div>
    <nav class="nav-links" id="nav-links">${navLinksHTML}</nav>
    <button class="nav-toggle" id="nav-menu-btn" aria-label="Menu">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>
  `;

  nav.querySelector('#nav-signout-btn')?.addEventListener('click', signOut);
  nav.querySelector('#nav-lang-btn').addEventListener('click', toggleLang);
  nav.querySelector('#nav-menu-btn').addEventListener('click', () => nav.classList.toggle('open'));

  // nav-dark: section-aware inversion when overlapping dark sections.
  // rAF-throttled — without it, every scroll event forced N getBoundingClientRect
  // reads (= sync layout). On Safari that was the dominant scroll-jank source.
  const _darkSections = () => document.querySelectorAll('.stats-dark, footer.footer-dark, [data-nav-dark]');
  function updateNavDark() {
    const navRect = nav.getBoundingClientRect();
    const navBottom = navRect.bottom;
    let isDark = false;
    _darkSections().forEach(section => {
      const r = section.getBoundingClientRect();
      if (r.top <= navBottom && r.bottom >= 0) isDark = true;
    });
    nav.classList.toggle('nav-dark', isDark);
  }

  let _navRaf = null;
  function onNavScroll() {
    if (_navRaf) return;
    _navRaf = requestAnimationFrame(() => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
      updateNavDark();
      _navRaf = null;
    });
  }
  window.addEventListener('scroll', onNavScroll, { passive: true });
  nav.classList.toggle('scrolled', window.scrollY > 40);
  updateNavDark();
}

function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  // Add footer-dark class for dark bg + nav-dark detection trigger (pivot-audit §C #6 + #7)
  footer.classList.add('footer-dark');
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">HAY<span>WEB</span></div>
          <p class="footer-desc">${t('footer_desc')}</p>
        </div>
        <div class="footer-col">
          <h5>${t('footer_links')}</h5>
          <ul class="footer-links">
            <li><a href="/index.html">${t('nav_home')}</a></li>
            <li><a href="/portfolio.html">${t('nav_portfolio')}</a></li>
            <li><a href="/pricing.html">${t('nav_pricing')}</a></li>
            <li><a href="/guides.html">${t('nav_guides')}</a></li>
            <li><a href="/about.html">${t('nav_about')}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>${t('footer_services')}</h5>
          <ul class="footer-links">
            <li><a href="/pricing.html">Landing Page</a></li>
            <li><a href="/pricing.html">Web App</a></li>
            <li><a href="/pricing.html">E-commerce</a></li>
            <li><a href="/pricing.html">Enterprise</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>${t('footer_contact')}</h5>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" stroke="none"/></svg>
            <span>Chung cư R3 Onsen, KĐT Ecopark</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" stroke="none"/></svg>
            <!-- C1 FIX: clickable tel link (V-002) -->
            <a href="tel:+84797986525" class="footer-contact-link">0797 986 525</a>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" stroke="none"/></svg>
            <!-- C1 FIX: clickable mailto link (V-002) -->
            <a href="mailto:gsg.zero@gmail.com" class="footer-contact-link">gsg.zero@gmail.com</a>
          </div>
          <!-- C1 FIX: MST placeholder (V-002) -->
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>
            <span class="footer-mst">MST: Đang đăng ký</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div>
          <span class="footer-copy">${t('footer_copy')}</span>
          <span class="foot-set">&ensp;·&ensp;<em>${t('footer_colophon')}</em></span>
        </div>
        <!-- C2 FIX: social icons without real URLs get aria-disabled (V-003) — no clickable href="#" -->
        <div class="footer-socials">
          <span class="footer-social footer-social--disabled" role="img" aria-label="Facebook (coming soon)" title="Facebook — coming soon">
            <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
          </span>
          <span class="footer-social footer-social--disabled" role="img" aria-label="Instagram (coming soon)" title="Instagram — coming soon">
            <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </span>
          <span class="footer-social footer-social--disabled" role="img" aria-label="LinkedIn (coming soon)" title="LinkedIn — coming soon">
            <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
          </span>
        </div>
      </div>
    </div>
  `;

  // Avoid duplicates if renderFooter runs twice (e.g. SPA navigation)
  if (!document.querySelector('.mobile-cta-bar')) {
    const bar = document.createElement('div');
    bar.className = 'mobile-cta-bar';
    bar.setAttribute('aria-label', 'Mobile actions');
    bar.innerHTML = `
      <a href="tel:+84797986525" class="btn-outline" aria-label="Call HAYWEB">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        ${currentLang === 'vi' ? 'Gọi' : 'Call'}
      </a>
      <a href="https://zalo.me/0797986525" target="_blank" rel="noopener" class="btn-outline" aria-label="Zalo HAYWEB">Zalo</a>
      <a href="https://calendly.com/gsg-zero/30min" target="_blank" rel="noopener" class="btn-primary">${currentLang === 'vi' ? 'Đặt lịch' : 'Book'}</a>
    `;
    document.body.appendChild(bar);
  }
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Pass 5 fix (2026-05-03): skip elements that GSAP ScrollTrigger animates.
  // Both systems targeting the same element causes conflict: GSAP inline opacity:0
  // wins over CSS .fade-up.revealed { opacity:1 }, leaving elements stuck invisible.
  const gsapTargets = [
    '.hero-title .line', '.hero-resolve',
    '.pillar-card',
    '.stat-number',
    '.folio-feature', '.folio-image-real',
    '.tier',
    '.why-screenshot',
    '.process-step',
    '.section-title'
  ];
  const skipSelector = gsapTargets.join(', ');

  document.querySelectorAll('.fade-up, .testimonial-card').forEach(el => {
    // Skip elements managed by GSAP — let GSAP own their opacity/transform lifecycle
    if (el.matches(skipSelector)) return;

    // BUG GUARD: skip reveal class for elements already in viewport on init
    // (deep-link / fullpage-screenshot protection — structure-builder pitfall #10)
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom >= 0) {
      el.classList.add('revealed');
    } else {
      observer.observe(el);
    }
  });
}

function init3DTilt() {
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x*10}deg) rotateX(${-y*10}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

function initStatsCounter() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const raw      = el.dataset.count;
      const target   = parseFloat(raw);
      const decimals = (raw.split('.')[1] || '').length;
      const duration = 1800;
      const step     = target / (duration / 16);
      let current    = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = decimals
          ? current.toFixed(decimals)
          : Math.floor(current).toLocaleString();
      }, 16);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}

function formatVND(n) { return n.toLocaleString('vi-VN') + '₫'; }
function formatUSD(n) { return '$' + n.toLocaleString('en-US'); }
