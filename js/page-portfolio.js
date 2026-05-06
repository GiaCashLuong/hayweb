const vi = currentLang === 'vi';

const projects = [
  {
    accent: '#A67C2E',
    tagVI: 'Nhà hàng', tagEN: 'Restaurant',
    titleVI: 'Kobe Steak House', titleEN: 'Kobe Steak House',
    descVI: 'Website nhà hàng bít tết cao cấp với hệ thống đặt bàn online, menu interactive và gallery ảnh chuyên nghiệp.',
    descEN: 'Premium steakhouse website with online booking, interactive menu and professional photo gallery.',
    outcomeVI: '× 4.8 lượng đặt bàn online tháng đầu sau launch',
    outcomeEN: '× 4.8 online bookings in first month post-launch',
    deliveryVI: 'Bàn giao 5 ngày · Stripe + email confirmation',
    deliveryEN: 'Delivered in 5 days · Stripe + email confirmation',
    url: 'https://kobe-steak.vercel.app',
    category: 'restaurant'
  },
  {
    accent: '#6495ED',
    tagVI: 'Thương mại điện tử', tagEN: 'E-commerce',
    titleVI: 'HKP Sim Kinh Dịch', titleEN: 'HKP Feng Shui Sims',
    descVI: 'Nền tảng thương mại điện tử phong thủy cao cấp với hệ thống affiliate CTV và tích hợp PayOS.',
    descEN: 'Premium feng shui e-commerce platform with affiliate system and PayOS integration.',
    outcomeVI: '× 5.2 conversion rate so với version Shopify cũ',
    outcomeEN: '× 5.2 conversion rate vs previous Shopify build',
    deliveryVI: 'Bàn giao 12 ngày · CTV affiliate + PayOS dual gateway',
    deliveryEN: 'Delivered in 12 days · Affiliate program + PayOS dual gateway',
    url: '#',
    category: 'ecommerce'
  },
  {
    accent: '#C8C8C8',
    tagVI: 'Web Agency', tagEN: 'Web Agency',
    titleVI: 'HAYWEB Studio', titleEN: 'HAYWEB Studio',
    descVI: 'Chính website bạn đang xem — hệ thống web agency hoàn chỉnh với auth, quote tự động, ký số, thanh toán đa kênh.',
    descEN: 'This very website — a complete web agency system with auth, automated quoting, digital signing, and multi-channel payments.',
    outcomeVI: 'Lighthouse 95+ · Mozilla Observatory 100/100 A+',
    outcomeEN: 'Lighthouse 95+ · Mozilla Observatory 100/100 A+',
    deliveryVI: '4 Edge Functions · Supabase + Stripe + PayOS · CSP A+',
    deliveryEN: '4 Edge Functions · Supabase + Stripe + PayOS · CSP A+',
    url: 'https://hayweb.vercel.app',
    category: 'webapp'
  },
  {
    accent: '#E8A598',
    tagVI: 'Thời trang', tagEN: 'Fashion',
    titleVI: 'Luxury Fashion Boutique', titleEN: 'Luxury Fashion Boutique',
    descVI: 'Cửa hàng thời trang cao cấp với lookbook, kích cỡ guide và thanh toán VNPay.',
    descEN: 'Luxury fashion store with lookbook, size guide and VNPay payment.',
    outcomeVI: '+ 38% giá trị đơn trung bình sau redesign',
    outcomeEN: '+ 38% average order value post-redesign',
    deliveryVI: 'Bàn giao 9 ngày · VNPay + size-guide interactive',
    deliveryEN: 'Delivered in 9 days · VNPay + interactive size guide',
    url: '#',
    category: 'ecommerce'
  },
  {
    accent: '#6DB88A',
    tagVI: 'Dịch vụ', tagEN: 'Services',
    titleVI: 'Tech Consulting Firm', titleEN: 'Tech Consulting Firm',
    descVI: 'Website tư vấn công nghệ doanh nghiệp với hệ thống CRM mini và booking lịch tư vấn.',
    descEN: 'Enterprise tech consulting website with mini CRM and consultation booking system.',
    outcomeVI: '+ 67% lead chất lượng (qualified) qua form 4 bước',
    outcomeEN: '+ 67% qualified leads via 4-step intake form',
    deliveryVI: 'Bàn giao 14 ngày · CRM mini + Calendly integration',
    deliveryEN: 'Delivered in 14 days · Mini CRM + Calendly integration',
    url: '#',
    category: 'webapp'
  },
];

const categories = [
  { vi: 'Tất cả', en: 'All', val: 'all' },
  { vi: 'Nhà hàng', en: 'Restaurant', val: 'restaurant' },
  { vi: 'Bất động sản', en: 'Real Estate', val: 'realestate' },
  { vi: 'Thương mại điện tử', en: 'E-commerce', val: 'ecommerce' },
  { vi: 'Web App', en: 'Web App', val: 'webapp' },
];

let activeFilter = 'all';

function renderProjects() {
  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  const cardHTML = p => `
    <div class="portfolio-full-card fade-up" style="--port-accent:${p.accent}">
      <div class="portfolio-full-img">
        <div class="portfolio-card-visual" aria-hidden="true"></div>
      </div>
      <div class="portfolio-full-info">
        <div class="portfolio-full-tag">${vi ? p.tagVI : p.tagEN}</div>
        <h3>${vi ? p.titleVI : p.titleEN}</h3>
        <p>${vi ? p.descVI : p.descEN}</p>
        <div class="portfolio-outcome">
          <span class="outcome-label">${vi ? 'Kết quả đo được' : 'Measured outcome'}</span>
          <strong>${vi ? p.outcomeVI : p.outcomeEN}</strong>
          <span class="delivery-meta">${vi ? p.deliveryVI : p.deliveryEN}</span>
        </div>
        ${p.url !== '#' ? `
          <a href="${p.url}" target="_blank" rel="noopener" class="portfolio-full-link">
            ${vi ? 'Xem live' : 'View live'}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        ` : `<span style="font-size:.78rem;color:var(--muted);display:block;margin-top:1rem">${vi ? 'Bảo mật theo yêu cầu khách hàng' : 'Private per client request'}</span>`}
      </div>
    </div>
  `;

  const midCTA = vi ? `
    <aside class="article-inline-cta portfolio-mid-cta fade-up">
      <div class="inline-cta-body">
        <span class="inline-cta-kicker">Báo giá tự động · 5 phút</span>
        <strong class="inline-cta-headline">Đã thấy outcome thật. Giờ xem giá thực luôn.</strong>
        <p>Mỗi dự án trên đây đều có metric đo được — không phải testimonial chung chung. HAYWEB triển khai thẳng cho dự án của bạn theo cùng quy trình. Báo giá chi tiết trong 5 phút.</p>
        <span class="inline-cta-compare">
          <strong>HAYWEB: outcome đo được sau 1-2 tháng launch.</strong> Agency truyền thống: "case study" không số liệu cụ thể, không follow-up.
        </span>
      </div>
      <a href="/new-project.html" class="btn-primary inline-cta-btn">Nhận báo giá ngay →</a>
    </aside>
  ` : `
    <aside class="article-inline-cta portfolio-mid-cta fade-up">
      <div class="inline-cta-body">
        <span class="inline-cta-kicker">Auto-quote · 5 minutes</span>
        <strong class="inline-cta-headline">You've seen real outcomes. Now see the real price.</strong>
        <p>Every project above has a measured metric — not vague testimonials. HAYWEB ships your project on the same playbook. Detailed quote in 5 minutes.</p>
        <span class="inline-cta-compare">
          <strong>HAYWEB: measured outcome 1-2 months post-launch.</strong> Traditional agencies: "case studies" without specific numbers, no follow-up.
        </span>
      </div>
      <a href="/new-project.html" class="btn-primary inline-cta-btn">Get a quote now →</a>
    </aside>
  `;

  // Inject mid-CTA after 3rd card (or middle card if fewer than 6)
  const splitAt = Math.min(3, Math.ceil(filtered.length / 2));
  const before = filtered.slice(0, splitAt).map(cardHTML).join('');
  const after  = filtered.slice(splitAt).map(cardHTML).join('');
  document.getElementById('portfolio-grid').innerHTML = filtered.length > 3
    ? before + `<div class="portfolio-mid-cta-wrap">${midCTA}</div>` + after
    : before + after;

  initScrollReveal();
}

function init() {
  renderNav('portfolio');
  renderFooter();

  // ── Hero — outcome-led headline (info + implicit comparison via metrics) ──
  document.getElementById('port-label').textContent = vi ? 'Portfolio · 30 dự án' : 'Portfolio · 30 projects';
  document.getElementById('port-title').innerHTML = vi
    ? '30 dự án bàn giao. <em>0 khiếu nại.</em>'
    : '30 projects shipped. <em>0 complaints.</em>';
  document.getElementById('port-desc').textContent = vi
    ? 'Mỗi dự án dưới đây có một con số đo được — không phải lời khen suông. Chúng tôi đặt cạnh kết quả thật để bạn so sánh trước khi quyết định.'
    : 'Each project below has a measurable number — not just praise. We put the real outcomes side-by-side so you can compare before deciding.';

  // ── Final CTA — risk-reversal microcopy ──
  document.getElementById('cta-title').innerHTML = vi
    ? 'Dự án tiếp theo trong đây <em>là của bạn?</em>'
    : 'The next project on this list <em>could be yours.</em>';
  document.getElementById('cta-desc').textContent = vi
    ? 'Báo giá 5 phút · Đặt cọc 30% · Bàn giao 3-14 ngày · Trễ hạn → hoàn tiền theo điều khoản hợp đồng.'
    : 'Quote in 5 min · 30% deposit · Delivered in 3-14 days · Late delivery → refund per contract clause.';
  document.getElementById('cta-btn').textContent = vi ? 'Bắt đầu dự án ngay →' : 'Start your project →';

  document.getElementById('filters').innerHTML = categories.map(c => `
    <button class="filter-btn ${c.val === 'all' ? 'active' : ''}" data-val="${c.val}">${vi ? c.vi : c.en}</button>
  `).join('');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.val;
      renderProjects();
    });
  });

  renderProjects();
  initScrollReveal();
}

init();
