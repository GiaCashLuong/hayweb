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

const team = [
  {
    nameVI: 'Gia Lương', nameEN: 'Gia Luong',
    roleVI: 'Founder & Lead Developer', roleEN: 'Founder & Lead Developer',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  },
  {
    nameVI: 'Minh Tuyết', nameEN: 'Minh Tuyet',
    roleVI: 'UI/UX Designer', roleEN: 'UI/UX Designer',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    nameVI: 'Thái Bình', nameEN: 'Thai Binh',
    roleVI: 'Backend & Database', roleEN: 'Backend & Database',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  },
  {
    nameVI: 'Lan Anh', nameEN: 'Lan Anh',
    roleVI: 'Project Manager', roleEN: 'Project Manager',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
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
      <div class="team-avatar"><img src="${m.img}" alt="${vi ? m.nameVI : m.nameEN}" loading="lazy"></div>
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
