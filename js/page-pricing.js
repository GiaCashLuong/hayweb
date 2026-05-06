const vi = currentLang === 'vi';
let showUSD = false;

const tiers = [
  {
    id: 'starter',
    tierVI: 'Starter', tierEN: 'Starter',
    tagVI: 'Cho bài kiểm tra thị trường', tagEN: 'For market validation',
    vnd: 5000000, usd: 200,
    featuresVI: [
      '1 landing page chuyển đổi cao',
      '3 – 5 sections đẳng cấp đo ni đóng giày',
      'Form liên hệ kết nối Supabase realtime',
      'Responsive mobile/tablet/desktop',
      'SEO on-page + meta tags + sitemap',
      'Bàn giao trong 3 ngày làm việc',
      'Hỗ trợ 30 ngày sau bàn giao',
    ],
    featuresEN: [
      '1 high-converting landing page',
      '3 – 5 custom-designed sections',
      'Contact form on Supabase realtime',
      'Mobile / tablet / desktop responsive',
      'On-page SEO + meta tags + sitemap',
      'Delivered in 3 business days',
      '30-day post-launch support',
    ],
    excludeVI: ['Auth / Tài khoản', 'Thanh toán online', 'Dashboard khách hàng', 'Blog / Article system', 'API tích hợp'],
    excludeEN: ['Auth / Accounts', 'Online payments', 'Client dashboard', 'Blog / Article system', 'API integration'],
    featured: false,
    ctaVI: 'Bắt đầu Starter →', ctaEN: 'Start with Starter →',
  },
  {
    id: 'pro',
    tierVI: 'Professional', tierEN: 'Professional',
    tagVI: 'Lựa chọn của 70% khách hàng', tagEN: 'Picked by 70% of clients',
    vnd: 15000000, usd: 600,
    featuresVI: [
      'Multi-page (5 – 8 trang) cấu trúc SEO sâu',
      'Hệ thống đăng nhập (email + Google OAuth)',
      'Thanh toán Stripe + PayOS song song',
      'Dashboard khách hàng theo dõi đơn hàng',
      'Hiệu ứng cao cấp (parallax, magnetic, scroll-trigger)',
      'Bàn giao trong 7 ngày làm việc',
      'Hỗ trợ 60 ngày sau bàn giao',
    ],
    featuresEN: [
      'Multi-page (5 – 8 pages) deep SEO structure',
      'Login system (email + Google OAuth)',
      'Stripe + PayOS dual payment gateway',
      'Client dashboard for order tracking',
      'Advanced effects (parallax, magnetic, scroll-trigger)',
      'Delivered in 7 business days',
      '60-day post-launch support',
    ],
    excludeVI: ['API tùy chỉnh phức tạp', 'CRM/ERP tích hợp', 'Bảo trì 12 tháng'],
    excludeEN: ['Complex custom API', 'CRM/ERP integration', '12-month maintenance'],
    featured: true,
    ctaVI: 'Nhận báo giá ngay →', ctaEN: 'Get a quote now →',
  },
  {
    id: 'enterprise',
    tierVI: 'Enterprise', tierEN: 'Enterprise',
    tagVI: 'Cho hệ thống vận hành nội bộ', tagEN: 'For internal-ops systems',
    vnd: 35000000, usd: 1400,
    featuresVI: [
      'Hệ thống web toàn diện custom-built',
      'API tùy chỉnh theo workflow kinh doanh',
      'Tích hợp CRM / ERP / Analytics đa tầng',
      'Admin panel quản trị + role-based access',
      'Multi-tenant / White-label sẵn sàng',
      'Bàn giao linh hoạt theo timeline',
      'Bảo trì + SLA 12 tháng',
    ],
    featuresEN: [
      'End-to-end custom-built web system',
      'Custom API matching your business workflow',
      'Multi-layer CRM / ERP / Analytics integration',
      'Admin panel + role-based access',
      'Multi-tenant / White-label ready',
      'Flexible delivery timeline',
      '12-month maintenance + SLA',
    ],
    excludeVI: [],
    excludeEN: [],
    featured: false,
    ctaVI: 'Đặt buổi chiến lược →', ctaEN: 'Book a strategy call →',
  },
];

const compareFeatures = [
  { vi: 'Số trang', en: 'Pages', starter: '1', pro: '5–8', enterprise: '∞' },
  { vi: 'Đăng nhập / Auth', en: 'Auth / Login', starter: '✗', pro: '✓', enterprise: '✓' },
  { vi: 'Thanh toán online', en: 'Online payment', starter: '✗', pro: '✓', enterprise: '✓' },
  { vi: 'Dashboard khách hàng', en: 'Client dashboard', starter: '✗', pro: '✓', enterprise: '✓' },
  { vi: 'API tùy chỉnh', en: 'Custom API', starter: '✗', pro: '✗', enterprise: '✓' },
  { vi: 'CRM / ERP tích hợp', en: 'CRM / ERP integration', starter: '✗', pro: '✗', enterprise: '✓' },
  { vi: 'Bảo trì sau bàn giao', en: 'Post-launch maintenance', starter: '30 ngày / days', pro: '60 ngày / days', enterprise: '12 tháng / months' },
  { vi: 'Thời gian bàn giao', en: 'Delivery time', starter: '3 ngày / days', pro: '7 ngày / days', enterprise: vi ? 'Linh hoạt' : 'Flexible' },
  { vi: 'Đúng hạn hoặc hoàn tiền', en: 'On-time or refund', starter: '✓', pro: '✓', enterprise: '✓' },
  { vi: 'Sở hữu source code 100%', en: '100% source-code ownership', starter: '✓', pro: '✓', enterprise: '✓' },
];

// Pain-point bullets — demand-stim section between hero and tiers
const painBullets = [
  {
    iconVI: '50tr', iconEN: '50M',
    titleVI: 'Phí ẩn sau ký hợp đồng',
    titleEN: 'Hidden fees after signing',
    descVI: 'Báo giá 15tr ban đầu → cộng "phí phát sinh, phí điều chỉnh scope" → 50tr lúc bàn giao. Tại HAYWEB: giá ký = giá thanh toán, không nhúc nhích.',
    descEN: 'Quoted 15M up front → "scope-creep fees" piled on → invoice 50M at delivery. At HAYWEB: signed price = final price, locked.',
  },
  {
    iconVI: '6T+', iconEN: '6mo+',
    titleVI: 'Trễ deadline 6 tháng',
    titleEN: '6-month delivery delay',
    descVI: 'Agency truyền thống: hứa 2 tháng → kéo 6 tháng → website lỗi thời trước khi launch. HAYWEB: trễ 1 ngày → giảm 10%, trễ 7 ngày → hoàn 100%.',
    descEN: 'Traditional agencies: 2-month promise → 6-month drag → site outdated before launch. HAYWEB: 1 day late → 10% off, 7 days → 100% refund.',
  },
  {
    iconVI: 'ZIP', iconEN: 'ZIP',
    titleVI: 'Bàn giao file ZIP rồi biến mất',
    titleEN: 'ZIP file then they vanish',
    descVI: 'Khi cần đổi logo, sửa nội dung, deploy hosting mới → freelance không trả lời. HAYWEB: Git repo + tài liệu deploy + 30 ngày hỗ trợ minimum.',
    descEN: 'Need a logo update or new host? Freelancer ghosts you. HAYWEB: Git repo + deploy docs + 30-day support minimum.',
  },
];

const faqs = [
  {
    qVI: 'Có thật là trễ deadline thì hoàn tiền không?',
    qEN: 'Is the on-time-or-refund clause real?',
    aVI: 'Có. Đây là điều khoản trong hợp đồng dịch vụ — không phải khẩu hiệu. Trễ 1 ngày tính từ deadline ký nhận trừ 10% giá trị; trễ 7 ngày → hoàn lại toàn bộ tiền cọc + công đã làm. Trong 30/30 dự án bàn giao đến nay, chúng tôi chưa phải kích hoạt điều khoản này lần nào.',
    aEN: 'Yes. This is a contract clause — not a slogan. 1 day past the signed deadline = 10% off; 7 days = full refund of deposit + work done. Across 30/30 projects, we have never had to invoke this clause.',
  },
  {
    qVI: 'Tôi có toàn quyền sở hữu source code không?',
    qEN: 'Do I get full ownership of the source code?',
    aVI: 'Có — sau khi thanh toán đầy đủ, bạn nhận: Git repository (push lên GitHub/GitLab cá nhân), tài liệu deploy chi tiết, credentials hosting (Vercel/Supabase), checklist Lighthouse + Mozilla Observatory. Đổi đối tác bảo trì bất cứ lúc nào, không cần xin phép HAYWEB.',
    aEN: 'Yes — after final payment, you receive: Git repo (push to your own GitHub/GitLab), detailed deploy docs, hosting credentials (Vercel/Supabase), Lighthouse + Mozilla Observatory checklist. Switch maintainers anytime; no permission needed.',
  },
  {
    qVI: 'Tại sao báo giá cố định mà không tính theo giờ?',
    qEN: 'Why fixed price instead of hourly billing?',
    aVI: 'Vì hầu hết khách hàng không quan tâm dự án mất 80h hay 120h — họ muốn biết trước cuối tháng phải trả bao nhiêu. Báo giá cố định buộc HAYWEB phải efficient (lợi cho cả 2 bên), không như mô hình giờ-công khuyến khích kéo dài. Risk thuộc về chúng tôi, không thuộc bạn.',
    aEN: 'Because most clients don\'t care if a project takes 80 or 120 hours — they want to know what the invoice looks like before signing. Fixed price forces HAYWEB to be efficient (win-win), unlike hourly billing which incentivizes drag. The risk is on us, not you.',
  },
  {
    qVI: 'HAYWEB dùng công nghệ gì? Tôi có cần tự code không?',
    qEN: 'What stack does HAYWEB use? Do I need to code?',
    aVI: 'Vanilla HTML/CSS/JS hoặc Next.js/React tùy yêu cầu — code tay 100%, không page builder. Stack ưa dùng: Supabase (DB + auth), Vercel (hosting), Stripe + PayOS (payment). Bạn không cần biết code — chúng tôi bàn giao kèm hướng dẫn vận hành cho người không kỹ thuật.',
    aEN: 'Vanilla HTML/CSS/JS or Next.js/React based on needs — 100% hand-coded, no page builders. Default stack: Supabase (DB + auth), Vercel (hosting), Stripe + PayOS (payment). You don\'t need to code — we deliver with non-technical operating docs.',
  },
  {
    qVI: 'Tôi có thể đổi yêu cầu sau khi ký hợp đồng không?',
    qEN: 'Can I change requirements after signing?',
    aVI: 'Có thể — thay đổi nhỏ trong scope (đổi text, đổi ảnh, swap section) miễn phí. Thay đổi lớn (thêm trang, thêm tính năng) sẽ được báo giá phụ trước khi triển khai. Bạn duyệt rồi mới làm — không bao giờ phát sinh phí mà không có chấp thuận trước.',
    aEN: 'Yes — small in-scope changes (text, images, section swaps) are free. Major changes (new pages, new features) get an addendum quote before work starts. You approve first — no surprise charges, ever.',
  },
  {
    qVI: 'Quy trình từ liên hệ đến bàn giao như thế nào?',
    qEN: 'What\'s the full process from contact to launch?',
    aVI: '① Điền form yêu cầu (5 phút) → ② Nhận báo giá chi tiết (tự động) → ③ Ký số online + đặt cọc 30% → ④ Đội triển khai (3-14 ngày tùy gói) → ⑤ Demo + nghiệm thu → ⑥ Thanh toán 70% còn lại + bàn giao Git/credentials → ⑦ Hỗ trợ 30-60 ngày miễn phí.',
    aEN: '① Fill the form (5 min) → ② Auto-generated detailed quote → ③ Sign digitally + 30% deposit → ④ Team builds (3 – 14 days per tier) → ⑤ Demo + acceptance → ⑥ Final 70% + Git/credentials handover → ⑦ 30 – 60 day free support.',
  },
];

function formatPrice(vnd, usd) {
  return showUSD ? formatUSD(usd) : formatVND(vnd);
}

function renderPainStrip() {
  const el = document.getElementById('pain-strip');
  if (!el) return;
  el.innerHTML = painBullets.map(p => `
    <div class="pain-card fade-up">
      <div class="pain-icon">${vi ? p.iconVI : p.iconEN}</div>
      <h4>${vi ? p.titleVI : p.titleEN}</h4>
      <p>${vi ? p.descVI : p.descEN}</p>
    </div>
  `).join('');
}

function renderPricing() {
  document.getElementById('pricing-grid').innerHTML = tiers.map(tier => `
    <div class="price-card ${tier.featured ? 'featured' : ''} fade-up">
      <div class="price-tier">${vi ? tier.tierVI : tier.tierEN}</div>
      <div class="price-tag-tier">${vi ? tier.tagVI : tier.tagEN}</div>
      <div class="price-amount">${formatPrice(tier.vnd, tier.usd)}</div>
      <div class="price-amount-usd">${showUSD ? formatVND(tier.vnd) : formatUSD(tier.usd)}</div>
      <div class="price-divider"></div>
      <ul class="price-features">
        ${(vi ? tier.featuresVI : tier.featuresEN).map(f => `
          <li>
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            ${f}
          </li>
        `).join('')}
        ${(vi ? tier.excludeVI : tier.excludeEN).map(f => `
          <li style="opacity:.4">
            <svg viewBox="0 0 24 24" stroke="var(--muted)"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ${f}
          </li>
        `).join('')}
      </ul>
      <a href="${tier.id === 'enterprise' ? '/contact.html' : '/new-project.html'}" class="${tier.featured ? 'btn-primary' : 'btn-outline'}">${vi ? tier.ctaVI : tier.ctaEN}</a>
    </div>
  `).join('');
  initScrollReveal();
}

function renderCompare() {
  document.getElementById('compare-table').innerHTML = `
    <thead>
      <tr>
        <th>${vi ? 'Tính năng' : 'Feature'}</th>
        <th>Starter</th>
        <th>Professional <span class="cmp-pick-tag">${vi ? 'CHỌN' : 'PICK'}</span></th>
        <th>Enterprise</th>
      </tr>
    </thead>
    <tbody>
      ${compareFeatures.map(f => `
        <tr>
          <td>${vi ? f.vi : f.en}</td>
          <td>${f.starter === '✓' ? '<span class="check-yes">✓</span>' : f.starter === '✗' ? '<span class="check-no">✗</span>' : f.starter}</td>
          <td>${f.pro === '✓' ? '<span class="check-yes">✓</span>' : f.pro === '✗' ? '<span class="check-no">✗</span>' : f.pro}</td>
          <td>${f.enterprise === '✓' ? '<span class="check-yes">✓</span>' : f.enterprise === '✗' ? '<span class="check-no">✗</span>' : f.enterprise}</td>
        </tr>
      `).join('')}
    </tbody>
  `;
}

function renderFAQ() {
  document.getElementById('faq-list').innerHTML = faqs.map((f, i) => `
    <div class="fade-up faq-item-row" style="border-bottom:1px solid var(--border);padding:1.5rem 0">
      <button style="width:100%;text-align:left;background:none;border:none;color:var(--cream);font-size:1rem;font-weight:500;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:1rem" id="faq-q-${i}">
        ${vi ? f.qVI : f.qEN}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="faq-chevron" style="flex-shrink:0;transition:transform .3s"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div id="faq-a-${i}" style="display:none;margin-top:.75rem">
        <p style="font-size:.9rem;color:var(--muted);line-height:1.75">${vi ? f.aVI : f.aEN}</p>
      </div>
    </div>
  `).join('');

  faqs.forEach((_, i) => {
    document.getElementById(`faq-q-${i}`).addEventListener('click', () => {
      const answer = document.getElementById(`faq-a-${i}`);
      const chevron = document.querySelector(`#faq-q-${i} .faq-chevron`);
      const isOpen = answer.style.display !== 'none';
      answer.style.display = isOpen ? 'none' : 'block';
      chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
    });
  });
}

function init() {
  renderNav('pricing');
  renderFooter();

  // ── Hero — sharper headline overrides i18n for this page only ──
  document.getElementById('price-label').textContent = vi ? 'Bảng giá minh bạch' : 'Transparent pricing';
  document.getElementById('price-title').innerHTML = vi
    ? 'Một con số. Một deadline. <em>Không phí ẩn.</em>'
    : 'One price. One deadline. <em>Zero hidden fees.</em>';
  document.getElementById('price-desc').textContent = vi
    ? 'Giá ký hôm nay là giá thanh toán cuối kỳ. Trễ deadline → hoàn tiền theo điều khoản hợp đồng. Source code 100% thuộc về bạn ngay khi nghiệm thu — không subscription, không lock-in.'
    : 'The price you sign today is the price you pay. Late delivery → refund per contract clause. 100% source-code ownership at acceptance — no subscriptions, no lock-in.';
  document.getElementById('toggle-vnd').textContent = 'VND ₫';
  document.getElementById('toggle-usd').textContent = 'USD $';

  // ── Pain strip (NEW — kích cầu via 3 specific anti-patterns) ──
  document.getElementById('pain-label').textContent = vi ? 'Bạn đã từng gặp?' : 'Sound familiar?';
  document.getElementById('pain-title').innerHTML = vi
    ? '<em>Ba cái bẫy</em> phổ biến khi đặt làm web — và cách HAYWEB xử lý'
    : '<em>Three traps</em> in commissioning a website — and how HAYWEB handles them';
  renderPainStrip();

  // ── Compare title ──
  document.getElementById('compare-title').innerHTML = vi
    ? 'So sánh <em>chi tiết 3 gói</em>'
    : 'Detailed <em>tier comparison</em>';

  // ── FAQ ──
  document.getElementById('faq-title').innerHTML = vi
    ? '6 câu hỏi <em>thẳng thắn</em> nhất'
    : '6 most <em>direct questions</em>';

  // ── Final CTA — risk-reversal stack ──
  document.getElementById('cta-title').innerHTML = vi
    ? 'Đặt cọc 30% hôm nay. <em>Trễ — hoàn tiền.</em>'
    : '30% deposit today. <em>Late — refund.</em>';
  document.getElementById('cta-btn').textContent = vi ? 'Nhận báo giá 5 phút →' : 'Get a 5-minute quote →';

  const toggle = document.getElementById('currency-toggle');
  toggle.addEventListener('click', () => {
    showUSD = !showUSD;
    toggle.classList.toggle('active', showUSD);
    renderPricing();
  });

  renderPricing();
  renderCompare();
  renderFAQ();
  initScrollReveal();
}

init();
