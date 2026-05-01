const vi = currentLang === 'vi';

const projects = [
  {
    accent: '#A67C2E',
    tagVI: 'Nhà hàng', tagEN: 'Restaurant',
    titleVI: 'Kobe Steak House', titleEN: 'Kobe Steak House',
    descVI: 'Website nhà hàng bít tết cao cấp với hệ thống đặt bàn online, menu interactive và gallery ảnh chuyên nghiệp.',
    descEN: 'Premium steakhouse website with online booking, interactive menu and professional photo gallery.',
    url: 'https://kobe-steak.vercel.app',
    category: 'restaurant'
  },
  {
    accent: '#6495ED',
    tagVI: 'Thương mại điện tử', tagEN: 'E-commerce',
    titleVI: 'HKP Sim Kinh Dịch', titleEN: 'HKP Feng Shui Sims',
    descVI: 'Nền tảng thương mại điện tử phong thủy cao cấp với hệ thống affiliate CTV và tích hợp PayOS.',
    descEN: 'Premium feng shui e-commerce platform with affiliate system and PayOS integration.',
    url: '#',
    category: 'ecommerce'
  },
  {
    accent: '#C8C8C8',
    tagVI: 'Web Agency', tagEN: 'Web Agency',
    titleVI: 'HAYWEB Studio', titleEN: 'HAYWEB Studio',
    descVI: 'Chính website bạn đang xem — hệ thống web agency hoàn chỉnh với auth, quote tự động, ký số, thanh toán đa kênh.',
    descEN: 'This very website — a complete web agency system with auth, automated quoting, digital signing, and multi-channel payments.',
    url: 'https://hayweb.vercel.app',
    category: 'webapp'
  },
  {
    accent: '#E8A598',
    tagVI: 'Thời trang', tagEN: 'Fashion',
    titleVI: 'Luxury Fashion Boutique', titleEN: 'Luxury Fashion Boutique',
    descVI: 'Cửa hàng thời trang cao cấp với lookbook, kích cỡ guide và thanh toán VNPay.',
    descEN: 'Luxury fashion store with lookbook, size guide and VNPay payment.',
    url: '#',
    category: 'ecommerce'
  },
  {
    accent: '#6DB88A',
    tagVI: 'Dịch vụ', tagEN: 'Services',
    titleVI: 'Tech Consulting Firm', titleEN: 'Tech Consulting Firm',
    descVI: 'Website tư vấn công nghệ doanh nghiệp với hệ thống CRM mini và booking lịch tư vấn.',
    descEN: 'Enterprise tech consulting website with mini CRM and consultation booking system.',
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
  document.getElementById('portfolio-grid').innerHTML = filtered.map(p => `
    <div class="portfolio-full-card fade-up" style="--port-accent:${p.accent}">
      <div class="portfolio-full-img">
        <div class="portfolio-card-visual" aria-hidden="true"></div>
      </div>
      <div class="portfolio-full-info">
        <div class="portfolio-full-tag">${vi ? p.tagVI : p.tagEN}</div>
        <h3>${vi ? p.titleVI : p.titleEN}</h3>
        <p>${vi ? p.descVI : p.descEN}</p>
        ${p.url !== '#' ? `
          <a href="${p.url}" target="_blank" rel="noopener" class="portfolio-full-link">
            ${vi ? 'Xem live' : 'View live'}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        ` : `<span style="font-size:.78rem;color:var(--muted);display:block;margin-top:1rem">${vi ? 'Bảo mật theo yêu cầu khách hàng' : 'Private per client request'}</span>`}
      </div>
    </div>
  `).join('');
  initScrollReveal();
}

function init() {
  renderNav('portfolio');
  renderFooter();

  document.getElementById('port-label').textContent = t('port_label');
  document.getElementById('port-title').innerHTML = `${t('port_title')} <em>${t('port_title_em')}</em>`;
  document.getElementById('port-desc').textContent = vi
    ? 'Mỗi dự án là một câu chuyện thành công. Chúng tôi tự hào về từng sản phẩm đã tạo ra.'
    : 'Each project is a success story. We are proud of every product we have created.';
  document.getElementById('cta-title').innerHTML = `${t('cta_title')} <em>${t('cta_title_em')}</em>`;
  document.getElementById('cta-desc').textContent = t('cta_desc');
  document.getElementById('cta-btn').textContent = t('cta_btn');

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
