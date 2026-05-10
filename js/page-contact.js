const vi = currentLang === 'vi';

function setTexts() {
  // ── Hero — outcome-framed, sets expectation for response ──
  document.getElementById('con-label').textContent = vi ? 'Liên hệ · Tư vấn miễn phí' : 'Contact · Free consultation';
  document.getElementById('con-title').innerHTML = vi
    ? 'Phản hồi trong <em>4 giờ làm việc</em>'
    : 'Reply within <em>4 business hours</em>';
  document.getElementById('con-desc').textContent = vi
    ? 'Mọi câu hỏi đều được founder trả lời trực tiếp — không tổng đài bot, không "ticket sẽ được xử lý". 30/30 yêu cầu trong tháng qua đã được phản hồi đúng SLA 4 giờ.'
    : 'Every question is answered by the founder directly — no chatbots, no "ticket queued for review". 30/30 inquiries last month answered within the 4-hour SLA.';

  // ── Contact info column titles ──
  document.getElementById('con-addr-title').textContent = vi ? 'Studio Hà Nội' : 'Hanoi Studio';
  document.getElementById('con-phone-title').textContent = vi ? 'Hotline trực tiếp' : 'Direct hotline';
  document.getElementById('con-hours-title').textContent = vi ? 'Giờ làm việc' : 'Working hours';
  document.getElementById('con-hours-val').textContent = vi
    ? 'Thứ 2 – Thứ 7: 8:00 – 18:00 (GMT+7)'
    : 'Mon – Sat: 8:00 AM – 6:00 PM (GMT+7)';

  // ── Form labels — clearer outcome language ──
  document.getElementById('lbl-name').textContent  = vi ? 'Họ và tên *' : 'Full name *';
  document.getElementById('lbl-email').textContent = vi ? 'Email công việc *' : 'Work email *';
  document.getElementById('lbl-phone').textContent = vi ? 'Số điện thoại (tùy chọn)' : 'Phone (optional)';
  document.getElementById('lbl-msg').textContent   = vi
    ? 'Mô tả ngắn về dự án — quy mô, ngân sách, deadline mong muốn *'
    : 'Brief project description — scope, budget, target deadline *';
  document.getElementById('con-send').textContent  = vi ? 'Gửi yêu cầu →' : 'Send inquiry →';

  // Reassurance microcopy under submit button
  const reassureEl = document.getElementById('form-reassurance-text');
  if (reassureEl) {
    reassureEl.textContent = vi
      ? 'Thông tin được mã hóa SSL. Phản hồi qua email trong 4 giờ làm việc. Không spam, không pass cho bên thứ 3.'
      : 'SSL-encrypted. Email reply within 4 business hours. No spam, no third-party sharing.';
  }
}

function renderTrustStrip() {
  const wrap = document.getElementById('contact-trust-strip');
  if (!wrap) return;
  const steps = vi ? [
    { n: '01', title: 'Phản hồi trong 4h', desc: 'Founder đọc, không tổng đài. SLA viết trong contact policy.' },
    { n: '02', title: 'Brief 15 phút', desc: 'Call ngắn để hiểu mục tiêu — không bắt buộc, không sale push.' },
    { n: '03', title: 'Báo giá tự động', desc: 'Trong 24h: PDF chi tiết scope + timeline + giá cố định.' },
    { n: '04', title: 'Quyết định không vội', desc: 'Báo giá có giá trị 14 ngày. Không deal "chỉ hôm nay" giả tạo.' },
  ] : [
    { n: '01', title: 'Reply within 4h', desc: 'Founder reads it, no call center. SLA documented in contact policy.' },
    { n: '02', title: '15-min briefing', desc: 'Short call to understand the goal — optional, no sales push.' },
    { n: '03', title: 'Auto-generated quote', desc: 'Within 24h: detailed PDF with scope + timeline + fixed price.' },
    { n: '04', title: 'No-pressure decision', desc: 'Quote valid for 14 days. No fake "today only" deadlines.' },
  ];
  wrap.innerHTML = steps.map(s => `
    <div class="contact-trust-step fade-up">
      <span class="step-num">${s.n}</span>
      <h4>${s.title}</h4>
      <p>${s.desc}</p>
    </div>
  `).join('');
}

function renderAlternativeStrip() {
  const wrap = document.getElementById('contact-alt-strip');
  if (!wrap) return;
  wrap.innerHTML = vi ? `
    <p class="alt-label">Không phải lúc liên hệ nhanh?</p>
    <div class="alt-links">
      <a href="/new-project.html" class="alt-link"><strong>Báo giá tự động →</strong><span>5 phút, không cần call</span></a>
      <a href="/portfolio.html" class="alt-link"><strong>Xem 30 dự án đã bàn giao →</strong><span>Có outcome đo được</span></a>
      <a href="/pricing.html" class="alt-link"><strong>Bảng giá 3 gói →</strong><span>5tr · 15tr · 35tr</span></a>
    </div>
  ` : `
    <p class="alt-label">Not the right time to reach out?</p>
    <div class="alt-links">
      <a href="/new-project.html" class="alt-link"><strong>Auto-generate a quote →</strong><span>5 minutes, no call</span></a>
      <a href="/portfolio.html" class="alt-link"><strong>See 30 shipped projects →</strong><span>With measured outcomes</span></a>
      <a href="/pricing.html" class="alt-link"><strong>3-tier pricing →</strong><span>$200 · $600 · $1,400</span></a>
    </div>
  `;
}

function initMap() {
  const map = L.map('contact-map', { zoomControl: true, scrollWheelZoom: false })
    .setView([20.992, 106.063], 14);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CartoDB',
    maxZoom: 19,
  }).addTo(map);

  const icon = L.divIcon({
    html: '<div style="width:14px;height:14px;background:var(--gold-on-dark,#C9A042);border-radius:50%;border:2px solid white;box-shadow:0 0 12px rgba(201,160,66,0.6)"></div>',
    iconSize: [14, 14], iconAnchor: [7, 7], className: ''
  });

  L.marker([20.992, 106.063], { icon })
    .addTo(map)
    .bindPopup('<strong>HAYWEB Studio</strong><br>R3 Onsen, KĐT Ecopark');
}

document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = document.getElementById('con-send');
  const errEl = document.getElementById('con-error');
  const succEl = document.getElementById('con-success');
  errEl.textContent = '';
  succEl.style.display = 'none';
  btn.disabled = true;
  btn.textContent = t('loading');

  if (document.getElementById('website').value) return;

  const name  = document.getElementById('con-name').value.trim();
  const email = document.getElementById('con-email').value.trim();
  const phone = document.getElementById('con-phone').value.trim();
  const msg   = document.getElementById('con-msg').value.trim();

  const sb = await loadSb();
  const { error } = await sb.from('hw_contact_messages').insert({ name, email, phone, message: msg });

  if (error) {
    errEl.textContent = t('error');
  } else {
    succEl.style.display = 'block';
    succEl.textContent = vi
      ? '✓ Yêu cầu đã gửi. Founder sẽ phản hồi qua email trong 4 giờ làm việc.'
      : '✓ Request sent. The founder will reply by email within 4 business hours.';
    document.getElementById('contact-form').reset();
  }
  btn.disabled = false;
  btn.textContent = vi ? 'Gửi yêu cầu →' : 'Send inquiry →';
});

async function init() {
  await renderNav('contact');
  renderFooter();
  setTexts();
  renderTrustStrip();
  renderAlternativeStrip();
  initMap();
  initScrollReveal();
}

init();
