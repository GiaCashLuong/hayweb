const vi = currentLang === 'vi';
let currentStep = 1;

const features = [
  { vi: 'Đăng nhập / Tài khoản', en: 'Login / Accounts', val: 'auth' },
  { vi: 'Thanh toán online', en: 'Online Payment', val: 'payment' },
  { vi: 'Form liên hệ', en: 'Contact Form', val: 'contact_form' },
  { vi: 'Blog / Tin tức', en: 'Blog / News', val: 'blog' },
  { vi: 'Dashboard khách hàng', en: 'Client Dashboard', val: 'dashboard' },
  { vi: 'Đặt lịch / Booking', en: 'Booking System', val: 'booking' },
  { vi: 'Chat trực tiếp', en: 'Live Chat', val: 'chat' },
  { vi: 'Multi-language', en: 'Multi-language', val: 'i18n' },
  { vi: 'SEO nâng cao', en: 'Advanced SEO', val: 'seo' },
  { vi: 'App Mobile', en: 'Mobile App', val: 'mobile_app' },
];

const styles = [
  { vi: 'Tối giản / Minimalist', en: 'Minimalist', val: 'minimal' },
  { vi: 'Sang trọng / Luxury', en: 'Luxury / High-end', val: 'luxury' },
  { vi: 'Hiện đại / Modern', en: 'Modern / Tech', val: 'modern' },
  { vi: 'Truyền thống / Classic', en: 'Classic / Traditional', val: 'classic' },
  { vi: 'Vui tươi / Playful', en: 'Playful / Creative', val: 'playful' },
  { vi: 'Đơn giản / Clean', en: 'Clean / Simple', val: 'clean' },
];

const selectedFeatures = new Set();
let selectedStyle = '';

function showStep(n) {
  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  const target = n === 'loading' ? document.getElementById('step-loading') : document.getElementById(`step-${n}`);
  target.classList.add('active');
  currentStep = n;
  renderStepIndicator();
}

function renderStepIndicator() {
  const steps = [
    { vi: t('np_step1'), en: t('np_step1') },
    { vi: t('np_step2'), en: t('np_step2') },
    { vi: t('np_step3'), en: t('np_step3') },
  ];
  document.getElementById('step-indicator').innerHTML = steps.map((s, i) => {
    const n = i + 1;
    const done = currentStep > n;
    const active = currentStep === n;
    return `
      <div class="step ${active ? 'active' : ''} ${done ? 'done' : ''}">
        <div class="step-dot">${done ? '✓' : n}</div>
        <span class="step-label">${s.vi}</span>
      </div>
      ${i < steps.length - 1 ? '<div class="step-line"></div>' : ''}
    `;
  }).join('');
}

function setTexts() {
  document.getElementById('s1-title').textContent  = vi ? 'Dự án của bạn là gì?' : 'Tell us about your project';
  document.getElementById('s1-desc').textContent   = vi ? 'Cho chúng tôi biết về dự án để đội ngũ chuẩn bị đề xuất tốt nhất.' : 'Help us understand your project so we can prepare the best proposal.';
  document.getElementById('lbl-pname').textContent = vi ? 'Tên dự án / thương hiệu' : 'Project / brand name';
  document.getElementById('lbl-ptype').textContent = vi ? 'Loại website' : 'Website type';
  document.getElementById('lbl-pdesc').textContent = vi ? 'Mô tả chi tiết dự án' : 'Detailed project description';
  document.getElementById('project-desc').placeholder = vi
    ? 'VD: Cửa hàng bán hoa online, cần thanh toán, quản lý đơn hàng...'
    : 'E.g., Online flower shop, needs checkout and order management...';
  document.getElementById('lbl-ref').textContent   = vi ? 'Website tham khảo (tùy chọn)' : 'Reference websites (optional)';
  document.getElementById('next-1').textContent    = t('np_next');

  document.getElementById('s2-title').textContent  = vi ? 'Tính năng cần có?' : 'Required features?';
  document.getElementById('s2-desc').textContent   = vi ? 'Chọn các tính năng cần tích hợp.' : 'Select the features you need.';
  document.getElementById('lbl-features').textContent = vi ? 'Tính năng (chọn nhiều)' : 'Features (select multiple)';
  document.getElementById('lbl-pages').textContent = vi ? 'Số trang dự kiến' : 'Estimated number of pages';
  document.getElementById('lbl-budget').textContent= vi ? 'Ngân sách dự kiến' : 'Estimated budget';
  document.getElementById('prev-2').textContent    = t('np_prev');
  document.getElementById('next-2').textContent    = t('np_next');

  document.getElementById('s3-title').textContent  = vi ? 'Phong cách thiết kế?' : 'Design style?';
  document.getElementById('s3-desc').textContent   = vi ? 'Chọn phong cách phù hợp với thương hiệu của bạn.' : 'Choose the style that best fits your brand.';
  document.getElementById('lbl-style').textContent = vi ? 'Phong cách (chọn 1)' : 'Style (select one)';
  document.getElementById('lbl-colors').textContent= vi ? 'Màu sắc mong muốn' : 'Preferred colors';
  document.getElementById('lbl-deadline').textContent = vi ? 'Thời hạn mong muốn' : 'Desired deadline';
  document.getElementById('lbl-extra').textContent = vi ? 'Yêu cầu bổ sung' : 'Additional requirements';
  document.getElementById('prev-3').textContent    = t('np_prev');
  document.getElementById('submit-btn').textContent= t('np_submit');
  document.getElementById('loading-text').textContent = t('np_loading');

  // Feature tags
  document.getElementById('features-tags').innerHTML = features.map(f => `
    <button type="button" class="tag-option" data-val="${f.val}">${vi ? f.vi : f.en}</button>
  `).join('');
  document.querySelectorAll('#features-tags .tag-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.val;
      if (selectedFeatures.has(val)) { selectedFeatures.delete(val); btn.classList.remove('selected'); }
      else { selectedFeatures.add(val); btn.classList.add('selected'); }
    });
  });

  // Style tags
  document.getElementById('style-tags').innerHTML = styles.map(s => `
    <button type="button" class="tag-option" data-val="${s.val}">${vi ? s.vi : s.en}</button>
  `).join('');
  document.querySelectorAll('#style-tags .tag-option').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#style-tags .tag-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedStyle = btn.dataset.val;
    });
  });
}

document.getElementById('next-1').addEventListener('click', () => {
  const name = document.getElementById('project-name').value.trim();
  const desc = document.getElementById('project-desc').value.trim();
  if (!name || !desc) {
    alert(vi ? 'Vui lòng điền tên dự án và mô tả.' : 'Please fill in project name and description.');
    return;
  }
  showStep(2);
});
document.getElementById('prev-2').addEventListener('click', () => showStep(1));
document.getElementById('next-2').addEventListener('click', () => showStep(3));
document.getElementById('prev-3').addEventListener('click', () => showStep(2));

document.getElementById('submit-btn').addEventListener('click', async () => {
  const user = await requireAuth();
  if (!user) return;

  showStep('loading');

  const brief = {
    project_name: document.getElementById('project-name').value.trim(),
    project_type: document.getElementById('project-type').value,
    description:  document.getElementById('project-desc').value.trim(),
    references:   document.getElementById('project-refs').value.trim(),
    features:     [...selectedFeatures],
    num_pages:    document.getElementById('num-pages').value,
    budget:       document.getElementById('budget').value,
    style:        selectedStyle,
    colors:       document.getElementById('colors').value.trim(),
    deadline:     document.getElementById('deadline').value,
    extra_notes:  document.getElementById('extra-notes').value.trim(),
    lang: currentLang,
  };

  try {
    const resp = await fetch(`${HW_FN_BASE}/hw-generate-quote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${(await _sb.auth.getSession()).data.session.access_token}` },
      body: JSON.stringify({ brief, user_id: user.id }),
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error || 'Server error');
    window.location.href = `/quote.html?id=${data.project_id}`;
  } catch (err) {
    alert(err.message || t('error'));
    showStep(3);
  }
});

async function init() {
  await renderNav('dashboard');
  await requireAuth();
  setTexts();
  renderStepIndicator();
}

init();
