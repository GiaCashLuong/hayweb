const vi = currentLang === 'vi';
const params = new URLSearchParams(location.search);
const projectId = params.get('id');
let selectedPayment = 'stripe';
let signaturePad;
let project;

function setTexts() {
  document.getElementById('quote-by-label').textContent = t('quote_by');
  document.getElementById('quote-title-heading').textContent = t('quote_title');
  document.getElementById('loading-msg').textContent = t('loading');
  document.getElementById('summary-title').textContent = vi ? 'Tóm tắt' : 'Summary';
  document.getElementById('sign-title').textContent = t('quote_sign');
  document.getElementById('sig-clear').textContent = t('quote_clear');
  document.getElementById('pay-title').textContent = vi ? 'Phương thức thanh toán' : 'Payment Method';
  document.getElementById('stripe-label').textContent = t('quote_stripe');
  document.getElementById('payos-label').textContent = t('quote_payos');
  document.getElementById('btn-pay').textContent = t('quote_pay');
}

function renderQuote(q) {
  const body = document.getElementById('quote-body');
  body.innerHTML = `
    <h2 style="font-family:var(--font-display);font-size:1.8rem;font-style:italic;font-weight:300;color:var(--white);margin-bottom:.5rem">
      ${q.project_name}
    </h2>
    <p style="color:var(--muted);margin-bottom:2rem;font-size:.9rem">${q.summary}</p>

    <h3 class="quote-section-title">${vi ? 'Chi tiết báo giá' : 'Quote Details'}</h3>
    <div>
      ${(q.line_items || []).map(item => `
        <div class="quote-line-item">
          <div>
            <div style="color:var(--white);font-weight:500">${item.item}</div>
            <div style="color:var(--muted);font-size:.8rem;margin-top:.2rem">${item.description}</div>
          </div>
          <div style="text-align:right;flex-shrink:0;margin-left:1rem">
            <div style="color:var(--white)">${formatVND(item.amount_vnd)}</div>
            <div style="color:var(--muted);font-size:.8rem">${formatUSD(item.amount_usd)}</div>
          </div>
        </div>
      `).join('')}
      <div class="quote-total">
        <span class="quote-total-label">${vi ? 'Tổng cộng' : 'Total'}</span>
        <div style="text-align:right">
          <div class="quote-total-amount">${formatVND(q.total_vnd)}</div>
          <div style="color:var(--muted);font-size:.85rem">${formatUSD(q.total_usd)}</div>
        </div>
      </div>
    </div>

    ${q.included?.length ? `
      <div style="margin-top:2rem">
        <h4 style="font-size:.75rem;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);margin-bottom:.75rem">
          ${vi ? 'Bao gồm' : 'Included'}
        </h4>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:.5rem">
          ${q.included.map(it => `
            <li style="display:flex;gap:.6rem;align-items:center;font-size:.875rem;color:var(--silver-light)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              ${it}
            </li>
          `).join('')}
        </ul>
      </div>
    ` : ''}

    ${q.notes ? `<div style="margin-top:2rem;padding:1.25rem;background:rgba(192,192,192,0.04);border:1px solid var(--border);border-radius:var(--radius)">
      <p style="font-size:.875rem;color:var(--muted);line-height:1.65">${q.notes}</p>
    </div>` : ''}

    ${q.warranty ? `<div style="margin-top:1rem;font-size:.8rem;color:var(--muted);font-style:italic">${q.warranty}</div>` : ''}

    ${q.timeline_days ? `<div style="margin-top:1.5rem;display:flex;align-items:center;gap:.6rem;font-size:.875rem;color:var(--silver)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      ${vi ? `Thời gian triển khai: <strong style="color:var(--white)">${q.timeline_days} ngày</strong>` : `Timeline: <strong style="color:var(--white)">${q.timeline_days} days</strong>`}
    </div>` : ''}
  `;

  // Summary sidebar
  document.getElementById('quote-summary-content').innerHTML = `
    <div style="display:flex;flex-direction:column;gap:.5rem">
      <div style="display:flex;justify-content:space-between;font-size:.875rem">
        <span style="color:var(--muted)">${vi ? 'Dự án' : 'Project'}</span>
        <span style="color:var(--white)">${q.project_name}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:.875rem">
        <span style="color:var(--muted)">${vi ? 'Tổng VND' : 'Total VND'}</span>
        <span style="color:var(--white);font-family:var(--font-mono)">${formatVND(q.total_vnd)}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:.875rem">
        <span style="color:var(--muted)">${vi ? 'Tổng USD' : 'Total USD'}</span>
        <span style="color:var(--white);font-family:var(--font-mono)">${formatUSD(q.total_usd)}</span>
      </div>
    </div>
  `;
}

function initSignaturePad() {
  const canvas = document.getElementById('sig-canvas');
  signaturePad = new SignaturePad(canvas, {
    backgroundColor: 'rgba(24,24,24,1)',
    penColor: '#E0E0E0',
    minWidth: 1,
    maxWidth: 2.5,
  });
  // Resize canvas properly
  function resizeCanvas() {
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width  = canvas.offsetWidth  * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext('2d').scale(ratio, ratio);
    signaturePad.clear();
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  document.getElementById('sig-clear').addEventListener('click', () => signaturePad.clear());
}

async function saveSignature() {
  if (signaturePad.isEmpty()) {
    alert(vi ? 'Vui lòng ký trước khi tiếp tục.' : 'Please sign before continuing.');
    return false;
  }
  const sigData = signaturePad.toDataURL('image/png');
  const { error } = await _sb.from('hw_projects')
    .update({ signature_data: sigData, status: 'signed' })
    .eq('id', projectId);
  return !error;
}

document.getElementById('btn-stripe').addEventListener('click', () => {
  selectedPayment = 'stripe';
  document.getElementById('btn-stripe').classList.add('active');
  document.getElementById('btn-payos').classList.remove('active');
});

document.getElementById('btn-payos').addEventListener('click', () => {
  selectedPayment = 'payos';
  document.getElementById('btn-payos').classList.add('active');
  document.getElementById('btn-stripe').classList.remove('active');
});

document.getElementById('btn-pay').addEventListener('click', async () => {
  const payBtn = document.getElementById('btn-pay');
  payBtn.disabled = true;
  payBtn.textContent = t('loading');

  const signed = await saveSignature();
  if (!signed) { payBtn.disabled = false; payBtn.textContent = t('quote_pay'); return; }

  try {
    const session = await _sb.auth.getSession();
    const token = session.data.session?.access_token;

    if (selectedPayment === 'stripe') {
      const resp = await fetch(`${HW_FN_BASE}/hw-create-checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ project_id: projectId, currency: 'vnd' }),
      });
      const data = await resp.json();
      if (data.url) { window.location.href = data.url; return; }
      throw new Error(data.error);
    } else {
      const resp = await fetch(`${HW_FN_BASE}/hw-create-payos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ project_id: projectId }),
      });
      const data = await resp.json();
      if (data.checkout_url) { window.location.href = data.checkout_url; return; }
      throw new Error(data.error);
    }
  } catch (err) {
    alert(err.message || t('error'));
    payBtn.disabled = false;
    payBtn.textContent = t('quote_pay');
  }
});

async function init() {
  await renderNav('dashboard');
  renderFooter();
  setTexts();

  if (!projectId) { window.location.href = '/dashboard.html'; return; }
  await requireAuth();

  const { data, error } = await _sb.from('hw_projects').select('*').eq('id', projectId).single();
  if (error || !data) { window.location.href = '/dashboard.html'; return; }
  project = data;

  if (project.status === 'paid') {
    window.location.href = `/success.html?id=${projectId}`;
    return;
  }

  renderQuote(project.quote);
  initSignaturePad();
}

init();
