const vi = currentLang === 'vi';

function setTexts() {
  document.getElementById('con-label').textContent      = vi ? 'Liên hệ' : 'Contact';
  document.getElementById('con-title').textContent      = t('con_title');
  document.getElementById('con-desc').textContent       = vi
    ? 'Chúng tôi luôn sẵn sàng lắng nghe và tư vấn miễn phí cho dự án của bạn.'
    : 'We are always ready to listen and provide free consultation for your project.';
  document.getElementById('con-addr-title').textContent = vi ? 'Địa chỉ' : 'Address';
  document.getElementById('con-phone-title').textContent= vi ? 'Điện thoại' : 'Phone';
  document.getElementById('con-hours-title').textContent= vi ? 'Giờ làm việc' : 'Working Hours';
  document.getElementById('con-hours-val').textContent  = vi
    ? 'Thứ 2 – Thứ 7: 8:00 – 18:00'
    : 'Mon – Sat: 8:00 AM – 6:00 PM';
  document.getElementById('lbl-name').textContent  = t('con_name');
  document.getElementById('lbl-email').textContent = t('con_email');
  document.getElementById('lbl-phone').textContent = t('con_phone');
  document.getElementById('lbl-msg').textContent   = t('con_msg');
  document.getElementById('con-send').textContent  = t('con_send');
}

function initMap() {
  const map = L.map('contact-map', { zoomControl: true, scrollWheelZoom: false })
    .setView([20.992, 106.063], 14);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CartoDB',
    maxZoom: 19,
  }).addTo(map);

  const icon = L.divIcon({
    html: '<div style="width:14px;height:14px;background:var(--silver,#C0C0C0);border-radius:50%;border:2px solid white;box-shadow:0 0 10px rgba(192,192,192,0.5)"></div>',
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

  const name  = document.getElementById('con-name').value.trim();
  const email = document.getElementById('con-email').value.trim();
  const phone = document.getElementById('con-phone').value.trim();
  const msg   = document.getElementById('con-msg').value.trim();

  const { error } = await _sb.from('hw_contact_messages').insert({ name, email, phone, message: msg });

  if (error) {
    errEl.textContent = t('error');
  } else {
    succEl.style.display = 'block';
    succEl.textContent = t('con_sent');
    document.getElementById('contact-form').reset();
  }
  btn.disabled = false;
  btn.textContent = t('con_send');
});

async function init() {
  await renderNav('contact');
  renderFooter();
  setTexts();
  initMap();
  initScrollReveal();
}

init();
