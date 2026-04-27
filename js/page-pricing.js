const vi = currentLang === 'vi';
let showUSD = false;

const tiers = [
  {
    id: 'starter',
    tierVI: 'Starter', tierEN: 'Starter',
    vnd: 5000000, usd: 200,
    featuresVI: ['1 landing page', '3–5 sections đẳng cấp', 'Form liên hệ (Supabase)', 'Responsive mobile', 'SEO cơ bản + meta tags', 'Bàn giao trong 3 ngày', 'Hỗ trợ 30 ngày'],
    featuresEN: ['1 landing page', '3–5 premium sections', 'Contact form (Supabase)', 'Mobile responsive', 'Basic SEO + meta tags', 'Delivered in 3 days', '30-day support'],
    excludeVI: ['Auth / Tài khoản', 'Thanh toán', 'Dashboard', 'Blog', 'API tích hợp'],
    excludeEN: ['Auth / Accounts', 'Payments', 'Dashboard', 'Blog', 'API integration'],
    featured: false, ctaKey: 'price_cta_s'
  },
  {
    id: 'pro',
    tierVI: 'Professional', tierEN: 'Professional',
    vnd: 15000000, usd: 600,
    featuresVI: ['Multi-page (5–8 trang)', 'Hệ thống đăng nhập (email + Google)', 'Thanh toán Stripe + PayOS', 'Dashboard khách hàng', 'Hiệu ứng nâng cao (Ken Burns, Tilt, Counter...)', 'Bàn giao trong 7 ngày', 'Hỗ trợ 60 ngày'],
    featuresEN: ['Multi-page (5–8 pages)', 'Login system (email + Google)', 'Stripe + PayOS payments', 'Client dashboard', 'Advanced effects (Ken Burns, Tilt, Counter...)', 'Delivered in 7 days', '60-day support'],
    excludeVI: ['API tùy chỉnh', 'CRM/ERP tích hợp', 'Bảo trì 12 tháng'],
    excludeEN: ['Custom API', 'CRM/ERP integration', '12-month maintenance'],
    featured: true, ctaKey: 'price_cta_p'
  },
  {
    id: 'enterprise',
    tierVI: 'Enterprise', tierEN: 'Enterprise',
    vnd: 35000000, usd: 1400,
    featuresVI: ['Hệ thống web toàn diện', 'API tùy chỉnh theo nhu cầu', 'Tích hợp CRM / ERP / Analytics', 'Admin panel quản trị', 'Multi-tenant / White-label', 'Bàn giao linh hoạt theo timeline', 'Bảo trì 12 tháng'],
    featuresEN: ['Complete web system', 'Custom API development', 'CRM / ERP / Analytics integration', 'Admin panel', 'Multi-tenant / White-label', 'Flexible delivery timeline', '12-month maintenance'],
    excludeVI: [],
    excludeEN: [],
    featured: false, ctaKey: 'price_cta_e'
  }
];

const compareFeatures = [
  { vi: 'Số trang', en: 'Pages', starter: '1', pro: '5–8', enterprise: '∞' },
  { vi: 'Đăng nhập / Auth', en: 'Auth / Login', starter: '✗', pro: '✓', enterprise: '✓' },
  { vi: 'Thanh toán online', en: 'Online Payment', starter: '✗', pro: '✓', enterprise: '✓' },
  { vi: 'Dashboard khách hàng', en: 'Client Dashboard', starter: '✗', pro: '✓', enterprise: '✓' },
  { vi: 'API tùy chỉnh', en: 'Custom API', starter: '✗', pro: '✗', enterprise: '✓' },
  { vi: 'CRM / ERP tích hợp', en: 'CRM / ERP Integration', starter: '✗', pro: '✗', enterprise: '✓' },
  { vi: 'Bảo trì', en: 'Maintenance', starter: '30 ngày / days', pro: '60 ngày / days', enterprise: '12 tháng / months' },
  { vi: 'Thời gian bàn giao', en: 'Delivery Time', starter: '3 ngày / days', pro: '7 ngày / days', enterprise: vi ? 'Linh hoạt' : 'Flexible' },
];

const faqs = [
  {
    qVI: 'HAYWEB dùng công nghệ gì để xây dựng website?',
    qEN: 'What technologies does HAYWEB use to build websites?',
    aVI: 'Chúng tôi sử dụng HTML/CSS/JS thuần túy hoặc các framework phù hợp (Next.js, React) tùy theo yêu cầu, kết hợp với Supabase (database), Vercel (hosting) và các payment gateway hàng đầu.',
    aEN: 'We use vanilla HTML/CSS/JS or appropriate frameworks (Next.js, React) depending on requirements, combined with Supabase (database), Vercel (hosting) and leading payment gateways.',
  },
  {
    qVI: 'Tôi có thể thay đổi yêu cầu sau khi ký hợp đồng không?',
    qEN: 'Can I change requirements after signing the contract?',
    aVI: 'Có thể, nhưng các thay đổi ngoài phạm vi ban đầu sẽ được báo giá bổ sung. Chúng tôi luôn trao đổi minh bạch trước khi thực hiện bất kỳ thay đổi nào.',
    aEN: 'Yes, but changes outside the original scope will be quoted additionally. We always communicate transparently before implementing any changes.',
  },
  {
    qVI: 'Website có được hỗ trợ SEO không?',
    qEN: 'Does the website include SEO support?',
    aVI: 'Tất cả các gói đều bao gồm SEO cơ bản (meta tags, sitemap, schema markup). Gói Professional và Enterprise có thêm tối ưu tốc độ tải và Core Web Vitals.',
    aEN: 'All plans include basic SEO (meta tags, sitemap, schema markup). Professional and Enterprise plans additionally include load speed optimization and Core Web Vitals.',
  },
  {
    qVI: 'Tôi có được quyền sở hữu source code không?',
    qEN: 'Do I get ownership of the source code?',
    aVI: 'Có. Sau khi thanh toán đầy đủ, toàn bộ source code được chuyển giao cho bạn và bạn có quyền sở hữu hoàn toàn.',
    aEN: 'Yes. After full payment, the complete source code is transferred to you and you have full ownership rights.',
  },
  {
    qVI: 'Quy trình làm việc như thế nào?',
    qEN: 'What is the work process?',
    aVI: 'Điền form → Nhận báo giá (5 phút) → Ký số online → Thanh toán → Đội ngũ triển khai → Bàn giao + training → Hỗ trợ sau bàn giao.',
    aEN: 'Fill form → Receive quote (5 minutes) → Digital sign online → Payment → Team builds → Delivery + training → Post-delivery support.',
  },
];

function formatPrice(vnd, usd) {
  return showUSD ? formatUSD(usd) : formatVND(vnd);
}

function renderPricing() {
  document.getElementById('pricing-grid').innerHTML = tiers.map(tier => `
    <div class="price-card ${tier.featured ? 'featured' : ''} fade-up">
      <div class="price-tier">${vi ? tier.tierVI : tier.tierEN}</div>
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
      <a href="${tier.id === 'enterprise' ? '/contact.html' : '/new-project.html'}" class="${tier.featured ? 'btn-primary' : 'btn-outline'}">${t(tier.ctaKey)}</a>
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
        <th>Professional</th>
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
    <div class="fade-up" style="border-bottom:1px solid var(--border);padding:1.5rem 0">
      <button style="width:100%;text-align:left;background:none;border:none;color:var(--white);font-size:1rem;font-weight:500;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:1rem" id="faq-q-${i}">
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

  document.getElementById('price-label').textContent = t('price_label');
  document.getElementById('price-title').innerHTML = `${t('price_title')} <em>${t('price_title_em')}</em>`;
  document.getElementById('price-desc').textContent = t('price_desc');
  document.getElementById('toggle-vnd').textContent = 'VND ₫';
  document.getElementById('toggle-usd').textContent = 'USD $';
  document.getElementById('compare-title').innerHTML = vi ? 'So sánh <em>chi tiết</em>' : 'Detailed <em>comparison</em>';
  document.getElementById('faq-title').innerHTML = vi ? 'Câu hỏi <em>thường gặp</em>' : 'Frequently asked <em>questions</em>';
  document.getElementById('cta-title').innerHTML = `${t('cta_title')} <em>${t('cta_title_em')}</em>`;
  document.getElementById('cta-btn').textContent = t('cta_btn');

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
