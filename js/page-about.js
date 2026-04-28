const vi = currentLang === 'vi';

const values = [
  {
    num: '01',
    titleVI: 'Chất lượng không thỏa hiệp', titleEN: 'Uncompromising Quality',
    descVI: 'Mỗi dòng code, mỗi pixel trên màn hình đều được chúng tôi kiểm tra kỹ lưỡng. Chúng tôi không chấp nhận "tạm ổn".',
    descEN: 'Every line of code, every pixel on screen is carefully reviewed. We do not accept "good enough".'
  },
  {
    num: '02',
    titleVI: 'Minh bạch tuyệt đối', titleEN: 'Absolute Transparency',
    descVI: 'Báo giá rõ ràng, tiến độ cập nhật realtime, không phí ẩn. Bạn luôn biết chính xác tiền của mình đang được dùng vào đâu.',
    descEN: 'Clear pricing, realtime progress updates, no hidden fees. You always know exactly where your money is being used.'
  },
  {
    num: '03',
    titleVI: 'Đặt khách hàng làm trung tâm', titleEN: 'Client-First Mindset',
    descVI: 'Thành công của bạn chính là thành công của chúng tôi. Mỗi quyết định thiết kế đều hướng đến mục tiêu kinh doanh của bạn.',
    descEN: 'Your success is our success. Every design decision is directed toward your business goals.'
  },
  {
    num: '04',
    titleVI: 'Đổi mới liên tục', titleEN: 'Continuous Innovation',
    descVI: 'Luôn cập nhật xu hướng và công nghệ mới nhất. Sản phẩm của bạn sẽ không bao giờ lỗi thời khi làm việc với HAYWEB.',
    descEN: 'Always updated with the latest trends and technologies. Your product will never become outdated when working with HAYWEB.'
  },
  {
    num: '05',
    titleVI: 'Cam kết đúng hạn', titleEN: 'On-time Commitment',
    descVI: 'Deadline là sacred với chúng tôi. Bàn giao đúng hạn hoặc hoàn tiền 100% — đây không phải là khẩu hiệu mà là cam kết pháp lý.',
    descEN: 'Deadlines are sacred to us. On-time delivery or 100% refund — this is not a slogan but a legal commitment.'
  },
  {
    num: '06',
    titleVI: 'Hỗ trợ dài hạn', titleEN: 'Long-term Support',
    descVI: 'Mối quan hệ không kết thúc khi bàn giao sản phẩm. Chúng tôi đồng hành cùng bạn trong suốt hành trình phát triển.',
    descEN: 'The relationship does not end when the product is delivered. We accompany you throughout your development journey.'
  },
];

function svgTeamAvatar(variant) {
  const variants = {
    a: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ta1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f1f1f"/><stop offset="1" stop-color="#0f0f0f"/></linearGradient></defs><rect width="200" height="200" fill="url(#ta1)"/><circle cx="100" cy="80" r="32" fill="#9a9a9a"/><path d="M40 180c5-30 30-50 60-50s55 20 60 50z" fill="#9a9a9a"/></svg>`,
    b: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="tb1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#252028"/><stop offset="1" stop-color="#15131a"/></linearGradient></defs><rect width="200" height="200" fill="url(#tb1)"/><path d="M70 70c0-17 13-30 30-30s30 13 30 30v15l-15-5c-13 7-25 7-30 0l-15 5z" fill="#b8a896"/><circle cx="100" cy="85" r="28" fill="#cdbcab"/><path d="M40 180c5-28 30-48 60-48s55 20 60 48z" fill="#3a3340"/></svg>`,
    c: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="tc1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f2a2a"/><stop offset="1" stop-color="#11181a"/></linearGradient></defs><rect width="200" height="200" fill="url(#tc1)"/><path d="M68 75c0-19 14-35 32-35s32 16 32 35v15l-15-5c-13 7-25 7-32 0l-17 5z" fill="#3a2a1a"/><circle cx="100" cy="85" r="27" fill="#c69b75"/><path d="M40 180c5-28 30-48 60-48s55 20 60 48z" fill="#1f2f3a"/></svg>`,
    d: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="td1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a242a"/><stop offset="1" stop-color="#181318"/></linearGradient></defs><rect width="200" height="200" fill="url(#td1)"/><path d="M65 80c0-22 16-40 35-40s35 18 35 40v22l-18-8c-13 7-25 7-35 0l-17 8z" fill="#5a4a55"/><circle cx="100" cy="85" r="28" fill="#d8c4ad"/><path d="M40 180c5-28 30-48 60-48s55 20 60 48z" fill="#3a3038"/></svg>`,
  };
  return `data:image/svg+xml;utf8,${encodeURIComponent(variants[variant] || variants.a)}`;
}

const team = [
  {
    nameVI: 'Gia Lương', nameEN: 'Gia Luong',
    roleVI: 'Founder & Lead Developer', roleEN: 'Founder & Lead Developer',
    avatarVariant: 'a'
  },
  {
    nameVI: 'Minh Tuyết', nameEN: 'Minh Tuyet',
    roleVI: 'UI/UX Designer', roleEN: 'UI/UX Designer',
    avatarVariant: 'b'
  },
  {
    nameVI: 'Thái Bình', nameEN: 'Thai Binh',
    roleVI: 'Backend & Database', roleEN: 'Backend & Database',
    avatarVariant: 'c'
  },
  {
    nameVI: 'Lan Anh', nameEN: 'Lan Anh',
    roleVI: 'Project Manager', roleEN: 'Project Manager',
    avatarVariant: 'd'
  },
];

const stats = [
  { count: 120, suffix: '+', labelVI: 'Dự án đã bàn giao', labelEN: 'Projects Delivered' },
  { count: 98, suffix: '%', labelVI: 'Khách hàng hài lòng', labelEN: 'Client Satisfaction' },
  { count: 5, suffix: '+', labelVI: 'Năm kinh nghiệm', labelEN: 'Years Experience' },
  { count: 50, suffix: '+', labelVI: 'Đối tác tin cậy', labelEN: 'Trusted Partners' },
];

function init() {
  renderNav('about');
  renderFooter();

  document.getElementById('about-label').textContent = vi ? 'Về chúng tôi' : 'About Us';
  document.getElementById('about-title').innerHTML = vi
    ? 'Chúng tôi <em>kiến tạo</em> hơn là thiết kế'
    : 'We <em>craft</em> rather than design';
  document.getElementById('about-desc').textContent = vi
    ? 'HAYWEB ra đời từ niềm tin rằng mỗi doanh nghiệp xứng đáng có một website đẳng cấp thế giới — không phân biệt quy mô hay ngân sách.'
    : 'HAYWEB was born from the belief that every business deserves a world-class website — regardless of size or budget.';

  document.getElementById('story-label').textContent = vi ? 'Câu chuyện' : 'Our Story';
  document.getElementById('story-title').innerHTML = vi
    ? 'Từ một đam mê, <em>thành một sứ mệnh</em>'
    : 'From a passion, <em>to a mission</em>';
  document.getElementById('story-p1').textContent = vi
    ? 'HAYWEB được thành lập năm 2020 bởi một nhóm kỹ sư và designer đam mê với tầm nhìn: đưa chất lượng thiết kế web quốc tế đến với doanh nghiệp Việt Nam với mức giá hợp lý và quy trình minh bạch.'
    : 'HAYWEB was founded in 2020 by a group of passionate engineers and designers with a vision: to bring international-quality web design to Vietnamese businesses at fair prices with transparent processes.';
  document.getElementById('story-p2').textContent = vi
    ? 'Trong hơn 5 năm hoạt động, chúng tôi đã hoàn thành hơn 120 dự án cho khách hàng từ nhà hàng, bất động sản, thương mại điện tử đến startup công nghệ. Mỗi dự án là một bài học, mỗi khách hàng là một người bạn đồng hành.'
    : 'Over 5 years of operation, we have completed more than 120 projects for clients ranging from restaurants, real estate, e-commerce to tech startups. Each project is a lesson, each client is a companion.';

  document.getElementById('values-label').textContent = vi ? 'Giá trị cốt lõi' : 'Core Values';
  document.getElementById('values-title').innerHTML = vi
    ? 'Những gì chúng tôi <em>tin tưởng</em>'
    : 'What we <em>believe in</em>';
  document.getElementById('values-grid').innerHTML = values.map(v => `
    <div class="value-card fade-up">
      <div class="value-num">${v.num}</div>
      <h3>${vi ? v.titleVI : v.titleEN}</h3>
      <p>${vi ? v.descVI : v.descEN}</p>
    </div>
  `).join('');

  document.getElementById('stats-grid').innerHTML = stats.map(s => `
    <div class="stat-item fade-up">
      <div class="stat-number"><span data-count="${s.count}">${s.count}</span><span class="stat-suffix">${s.suffix}</span></div>
      <div class="stat-label">${vi ? s.labelVI : s.labelEN}</div>
    </div>
  `).join('');

  document.getElementById('team-label').textContent = vi ? 'Đội ngũ' : 'Our Team';
  document.getElementById('team-title').innerHTML = vi
    ? 'Những người <em>tạo nên HAYWEB</em>'
    : 'The people <em>behind HAYWEB</em>';
  document.getElementById('team-grid').innerHTML = team.map(m => `
    <div class="team-card fade-up">
      <div class="team-avatar"><img src="${svgTeamAvatar(m.avatarVariant)}" alt="${vi ? m.nameVI : m.nameEN}" loading="lazy"></div>
      <div class="team-name">${vi ? m.nameVI : m.nameEN}</div>
      <div class="team-role">${vi ? m.roleVI : m.roleEN}</div>
    </div>
  `).join('');

  document.getElementById('cta-title').innerHTML = `${t('cta_title')} <em>${t('cta_title_em')}</em>`;
  document.getElementById('cta-btn').textContent = t('cta_btn');

  initScrollReveal();
  initStatsCounter();
}

init();
