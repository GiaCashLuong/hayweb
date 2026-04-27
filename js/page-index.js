const services = [
  {
    icon: `<svg class="service-icon" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    titleVI: 'Website Doanh Nghiệp', titleEN: 'Business Website',
    descVI: 'Thiết kế chuyên nghiệp, chuẩn SEO, tối ưu chuyển đổi. Từ landing page đến hệ thống web app đầy đủ tính năng.',
    descEN: 'Professional design, SEO-ready, conversion-optimized. From landing pages to full-featured web apps.',
    tag: 'Web Design'
  },
  {
    icon: `<svg class="service-icon" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    titleVI: 'UI/UX & Thương hiệu', titleEN: 'UI/UX & Branding',
    descVI: 'Trải nghiệm người dùng được nghiên cứu kỹ lưỡng. Visual identity gắn kết và nhất quán trên mọi điểm chạm.',
    descEN: 'User experience crafted through research. Cohesive visual identity consistent across all touchpoints.',
    tag: 'UI/UX'
  },
  {
    icon: `<svg class="service-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    titleVI: 'E-commerce & Thanh toán', titleEN: 'E-commerce & Payments',
    descVI: 'Cửa hàng online tích hợp thanh toán quốc tế (Stripe) và nội địa (PayOS/VietQR). Quản lý đơn hàng tự động.',
    descEN: 'Online stores with international (Stripe) and domestic (PayOS/VietQR) payments. Automated order management.',
    tag: 'E-commerce'
  },
  {
    icon: `<svg class="service-icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.19h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16a2 2 0 0 1 1 1.92z"/></svg>`,
    titleVI: 'Tích hợp & API', titleEN: 'Integration & API',
    descVI: 'Kết nối CRM, ERP, chatbot, Google Analytics, Meta Pixel. API tùy chỉnh theo nhu cầu doanh nghiệp.',
    descEN: 'Connect CRM, ERP, chatbots, Google Analytics, Meta Pixel. Custom APIs tailored to your business needs.',
    tag: 'Integration'
  },
  {
    icon: `<svg class="service-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    titleVI: 'Bảo mật & Bảo trì', titleEN: 'Security & Maintenance',
    descVI: 'Bảo mật tiêu chuẩn quốc tế, uptime 99.9%, backup tự động. Bảo trì và cập nhật định kỳ.',
    descEN: 'International security standards, 99.9% uptime, automatic backups. Regular maintenance and updates.',
    tag: 'Maintenance'
  },
];

const stats = [
  { numVI: '120', numEN: '120', suffix: '+', labelVI: 'Dự án đã bàn giao', labelEN: 'Projects Delivered' },
  { numVI: '98', numEN: '98', suffix: '%', labelVI: 'Khách hàng hài lòng', labelEN: 'Client Satisfaction' },
  { numVI: '5', numEN: '5', suffix: '+', labelVI: 'Năm kinh nghiệm', labelEN: 'Years Experience' },
  { numVI: '99.9', numEN: '99.9', suffix: '%', labelVI: 'Uptime cam kết', labelEN: 'Uptime Guaranteed' },
];

const portfolio = [
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    titleVI: 'Kobe Steak House', titleEN: 'Kobe Steak House',
    descVI: 'Nhà hàng bít tết cao cấp', descEN: 'Premium steakhouse website',
    url: 'https://kobe-steak.vercel.app'
  },
  {
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    titleVI: 'Ecopark Real Estate', titleEN: 'Ecopark Real Estate',
    descVI: 'Bất động sản nghỉ dưỡng', descEN: 'Luxury real estate portal',
    url: 'https://ecopark-web.vercel.app'
  },
  {
    img: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&q=80',
    titleVI: 'HKP Sim Kinh Dịch', titleEN: 'HKP Feng Shui Sims',
    descVI: 'Thương mại điện tử phong thủy', descEN: 'Feng shui e-commerce platform',
    url: '#'
  },
];

const whyItems = [
  {
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--silver)" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    titleVI: 'Báo giá trong 5 phút', titleEN: 'Quote in 5 Minutes',
    descVI: 'Hệ thống báo giá chuẩn — không phải chờ 2–3 ngày như các đơn vị khác.', descEN: 'Our pricing system delivers instantly — no 2-3 day wait like competitors.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--silver)" stroke-width="1.5" stroke-linecap="round"><path d="M15 3H9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    titleVI: 'Ký số ngay trên web', titleEN: 'Sign Online Instantly',
    descVI: 'Xác nhận hợp đồng bằng chữ ký số ngay trên trình duyệt — không fax, không email qua lại.', descEN: 'Confirm agreements with digital signature right in your browser — no fax, no back-and-forth emails.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--silver)" stroke-width="1.5" stroke-linecap="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
    titleVI: 'Thanh toán đa phương thức', titleEN: 'Multi-method Payments',
    descVI: 'Thẻ quốc tế Visa/Mastercard và QR Banking nội địa — thanh toán ngay, không chờ chuyển khoản.', descEN: 'International Visa/Mastercard and domestic QR banking — pay instantly, no wire transfer delays.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--silver)" stroke-width="1.5" stroke-linecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    titleVI: 'Cam kết đúng hạn', titleEN: 'On-time Delivery Guarantee',
    descVI: 'Theo dõi tiến độ realtime qua dashboard. Cam kết bàn giao đúng hạn hoặc hoàn tiền 100%.', descEN: 'Track progress in real-time via dashboard. On-time delivery guaranteed or full refund.'
  },
];

const process = [
  { numVI: '01', numEN: '01', stepVI: 'Yêu cầu', stepEN: 'Brief', descVI: 'Điền form mô tả dự án', descEN: 'Fill project brief form' },
  { numVI: '02', numEN: '02', stepVI: 'Báo giá', stepEN: 'Quote', descVI: 'Nhận báo giá chi tiết ngay', descEN: 'Get detailed quote instantly' },
  { numVI: '03', numEN: '03', stepVI: 'Xác nhận', stepEN: 'Sign', descVI: 'Ký số và thanh toán online', descEN: 'Digital sign & pay online' },
  { numVI: '04', numEN: '04', stepVI: 'Triển khai', stepEN: 'Build', descVI: 'Đội ngũ bắt đầu thi công', descEN: 'Our team starts building' },
  { numVI: '05', numEN: '05', stepVI: 'Bàn giao', stepEN: 'Deliver', descVI: 'Nhận sản phẩm hoàn chỉnh', descEN: 'Receive your finished product' },
];

const pricing = [
  {
    tierVI: 'Starter', tierEN: 'Starter',
    vnd: '5.000.000₫', usd: '$200',
    featuresVI: ['1 trang landing page', '3–5 sections', 'Form liên hệ Supabase', 'Responsive mobile', 'SEO cơ bản', 'Bàn giao trong 3 ngày'],
    featuresEN: ['1 landing page', '3–5 sections', 'Contact form (Supabase)', 'Mobile responsive', 'Basic SEO', 'Delivered in 3 days'],
    featured: false, ctaKey: 'price_cta_s', href: '/new-project.html'
  },
  {
    tierVI: 'Professional', tierEN: 'Professional',
    vnd: '15.000.000₫', usd: '$600',
    featuresVI: ['Multi-page (5–8 trang)', 'Đăng nhập / Tài khoản', 'Thanh toán tích hợp', 'Dashboard khách hàng', 'Hiệu ứng nâng cao', 'Bàn giao trong 7 ngày'],
    featuresEN: ['Multi-page (5–8 pages)', 'Login / User accounts', 'Payment integration', 'Client dashboard', 'Advanced animations', 'Delivered in 7 days'],
    featured: true, ctaKey: 'price_cta_p', href: '/new-project.html'
  },
  {
    tierVI: 'Enterprise', tierEN: 'Enterprise',
    vnd: '35.000.000₫', usd: '$1,400',
    featuresVI: ['Hệ thống toàn diện', 'API tùy chỉnh', 'Tích hợp CRM/ERP', 'Admin panel', 'Bảo trì 12 tháng', 'Bàn giao linh hoạt'],
    featuresEN: ['Complete system', 'Custom API', 'CRM/ERP integration', 'Admin panel', '12-month maintenance', 'Flexible delivery'],
    featured: false, ctaKey: 'price_cta_e', href: '/contact.html'
  }
];

const testimonials = [
  {
    stars: '★★★★★',
    textVI: '"HAYWEB đã biến tầm nhìn của chúng tôi thành thực tế trong 5 ngày. Chất lượng vượt xa những gì chúng tôi kỳ vọng — đặc biệt là trải nghiệm người dùng."',
    textEN: '"HAYWEB turned our vision into reality in 5 days. Quality far exceeded our expectations — especially the user experience."',
    nameVI: 'Nguyễn Minh Tâm', nameEN: 'Nguyen Minh Tam',
    roleVI: 'CEO, Kobe Steak House', roleEN: 'CEO, Kobe Steak House',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
  },
  {
    stars: '★★★★★',
    textVI: '"Quy trình cực kỳ chuyên nghiệp. Từ lúc điền form đến khi nhận sản phẩm — mọi thứ đều minh bạch và đúng hạn. Tôi đã giới thiệu cho 3 đối tác khác."',
    textEN: '"Extremely professional process. From form submission to final delivery — everything was transparent and on time. I have since referred 3 other business partners."',
    nameVI: 'Trần Thị Lan Anh', nameEN: 'Tran Thi Lan Anh',
    roleVI: 'Founder, HKP Sim Kinh Dịch', roleEN: 'Founder, HKP Feng Shui',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
  },
  {
    stars: '★★★★★',
    textVI: '"Website của chúng tôi bây giờ nhận được nhiều lời khen từ khách hàng hơn bao giờ hết. Tỷ lệ chuyển đổi tăng 340% trong tháng đầu tiên."',
    textEN: '"Our website now receives more compliments from customers than ever before. Conversion rate increased 340% in the first month."',
    nameVI: 'Phạm Văn Đức', nameEN: 'Pham Van Duc',
    roleVI: 'Director, Ecopark Investments', roleEN: 'Director, Ecopark Investments',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop'
  }
];

const vi = currentLang === 'vi';

function buildPage() {
  // Hero
  document.getElementById('hero-eyebrow').textContent = t('hero_eyebrow');
  document.getElementById('hero-title').innerHTML =
    `${t('hero_title_1')} <em>${t('hero_title_2')}</em><br>${t('hero_title_3')} <em>${t('hero_title_4')}</em>`;
  document.getElementById('hero-sub').textContent = t('hero_sub');
  document.getElementById('hero-actions').innerHTML = `
    <a href="/new-project.html" class="btn-primary">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      ${t('hero_cta_1')}
    </a>
    <a href="/portfolio.html" class="btn-outline">${t('hero_cta_2')}</a>
  `;

  // Services
  document.getElementById('svc-label').textContent = t('svc_label');
  document.getElementById('svc-title').innerHTML = `${t('svc_title')} <em>${t('svc_title_em')}</em>`;
  document.getElementById('svc-desc').textContent = t('svc_desc');
  document.getElementById('svc-cta').textContent = vi ? 'Nhận báo giá →' : 'Get a Quote →';
  document.getElementById('services-grid').innerHTML = services.map(s => `
    <div class="service-card tilt shine">
      ${s.icon}
      <h3>${vi ? s.titleVI : s.titleEN}</h3>
      <p>${vi ? s.descVI : s.descEN}</p>
      <span class="service-tag">${s.tag}</span>
    </div>
  `).join('');

  // Stats
  document.getElementById('stats-grid').innerHTML = stats.map(s => `
    <div class="stat-item fade-up">
      <div class="stat-number">
        <span data-count="${parseFloat(s.numVI)}">${s.numVI}</span><span class="stat-suffix">${s.suffix}</span>
      </div>
      <div class="stat-label">${vi ? s.labelVI : s.labelEN}</div>
    </div>
  `).join('');

  // Portfolio
  document.getElementById('port-label').textContent = t('port_label');
  document.getElementById('port-title').innerHTML = `${t('port_title')} <em>${t('port_title_em')}</em>`;
  document.getElementById('port-viewall').textContent = t('port_viewall');
  document.getElementById('portfolio-grid').innerHTML = portfolio.map(p => `
    <div class="portfolio-card fade-up">
      <img src="${p.img}" alt="${vi ? p.titleVI : p.titleEN}" loading="lazy">
      <div class="portfolio-overlay">
        <h3>${vi ? p.titleVI : p.titleEN}</h3>
        <p>${vi ? p.descVI : p.descEN}</p>
        <a href="${p.url}" target="_blank" rel="noopener" class="portfolio-link">
          ${vi ? 'Xem dự án' : 'View project'}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  `).join('');

  // Why us
  document.getElementById('why-label').textContent = t('why_label');
  document.getElementById('why-title').innerHTML = `${t('why_title')} <em>${t('why_title_em')}</em>`;
  document.getElementById('why-desc').textContent = t('why_desc');
  document.getElementById('why-items').innerHTML = whyItems.map(w => `
    <div class="why-item fade-up">
      <div class="why-icon">${w.icon}</div>
      <div class="why-text">
        <h4>${vi ? w.titleVI : w.titleEN}</h4>
        <p>${vi ? w.descVI : w.descEN}</p>
      </div>
    </div>
  `).join('');
  document.getElementById('why-badge-text').textContent = vi
    ? '"Chúng tôi không làm web. Chúng tôi kiến tạo di sản số."'
    : '"We don\'t build websites. We craft digital legacies."';
  document.getElementById('why-badge-sub').textContent = vi ? '— Phương châm của HAYWEB' : '— The HAYWEB philosophy';

  // Process
  document.getElementById('proc-label').textContent = vi ? 'Quy trình' : 'Our Process';
  document.getElementById('proc-title').innerHTML = vi
    ? 'Từ ý tưởng đến <em>sản phẩm</em> trong 5 bước'
    : 'From idea to <em>product</em> in 5 steps';
  document.getElementById('process-steps').innerHTML = process.map((p, i) => `
    <div class="process-step fade-up ${i===0?'active':''}">
      <div class="process-num">${vi ? p.numVI : p.numEN}</div>
      <h4>${vi ? p.stepVI : p.stepEN}</h4>
      <p>${vi ? p.descVI : p.descEN}</p>
    </div>
    ${i < process.length - 1 ? '<div class="step-line" style="height:1px;background:var(--border);align-self:center;margin-top:-3rem"></div>' : ''}
  `).join('');

  // Pricing
  document.getElementById('price-label').textContent = t('price_label');
  document.getElementById('price-title').innerHTML = `${t('price_title')} <em>${t('price_title_em')}</em>`;
  document.getElementById('price-desc').textContent = t('price_desc');
  document.getElementById('pricing-preview').innerHTML = pricing.map(p => `
    <div class="price-card ${p.featured ? 'featured' : ''} fade-up">
      <div class="price-tier">${vi ? p.tierVI : p.tierEN}</div>
      <div class="price-amount">${p.vnd}</div>
      <div class="price-amount-usd">${p.usd}</div>
      <div class="price-divider"></div>
      <ul class="price-features">
        ${(vi ? p.featuresVI : p.featuresEN).map(f => `
          <li>
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            ${f}
          </li>
        `).join('')}
      </ul>
      <a href="${p.href}" class="${p.featured ? 'btn-primary' : 'btn-outline'}">${t(p.ctaKey)}</a>
    </div>
  `).join('');
  document.getElementById('price-viewall').textContent = vi ? 'Xem bảng giá đầy đủ →' : 'View full pricing →';

  // Testimonials
  document.getElementById('testi-label').textContent = t('testi_label');
  document.getElementById('testi-title').innerHTML = `${t('testi_title')} <em>${t('testi_title_em')}</em>`;
  document.getElementById('testimonials-grid').innerHTML = testimonials.map(t2 => `
    <div class="testimonial-card">
      <div class="testimonial-stars">${t2.stars}</div>
      <p class="testimonial-text">${vi ? t2.textVI : t2.textEN}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar"><img src="${t2.avatar}" alt="" loading="lazy"></div>
        <div>
          <div class="testimonial-name">${vi ? t2.nameVI : t2.nameEN}</div>
          <div class="testimonial-role">${vi ? t2.roleVI : t2.roleEN}</div>
        </div>
      </div>
    </div>
  `).join('');

  // CTA
  document.getElementById('cta-title').innerHTML = `${t('cta_title')} <em>${t('cta_title_em')}</em>`;
  document.getElementById('cta-desc').textContent = t('cta_desc');
  document.getElementById('cta-btn').textContent = t('cta_btn');
}

async function init() {
  await renderNav('home');
  renderFooter();
  buildPage();
  initScrollReveal();
  init3DTilt();
  initStatsCounter();
}

init();
