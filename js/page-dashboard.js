const vi = currentLang === 'vi';

const STATUS_LABELS = {
  vi: { pending: 'Chờ xử lý', signed: 'Đã ký', paid: 'Đã thanh toán' },
  en: { pending: 'Pending', signed: 'Signed', paid: 'Paid' }
};

function setTexts() {
  document.getElementById('nav-dash').textContent    = t('nav_dashboard');
  document.getElementById('nav-new').textContent     = t('dash_new');
  document.getElementById('nav-support').textContent = vi ? 'Hỗ trợ' : 'Support';
  document.getElementById('nav-logout').textContent  = t('nav_logout');
  document.getElementById('dash-new-btn').textContent= t('dash_new');
  document.getElementById('proj-heading').textContent= t('dash_projects');
  document.getElementById('no-proj-msg').textContent = t('dash_no_proj');
  document.getElementById('l-total').textContent     = t('dash_total');
  document.getElementById('l-pending').textContent   = t('dash_pending');
  document.getElementById('l-signed').textContent    = t('dash_signed');
  document.getElementById('l-paid').textContent      = t('dash_paid');
  document.getElementById('sidebar-signout').addEventListener('click', e => { e.preventDefault(); signOut(); });
}

function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!projects.length) {
    container.innerHTML = `<p style="color:var(--muted);padding:2rem 0">${t('dash_no_proj')}</p>
      <a href="/new-project.html" class="btn-primary" style="display:inline-flex">${t('dash_new')}</a>`;
    return;
  }
  const sl = STATUS_LABELS[vi ? 'vi' : 'en'];
  container.innerHTML = `
    <div style="overflow-x:auto">
      <table class="project-table">
        <thead>
          <tr>
            <th>${vi ? 'Tên dự án' : 'Project Name'}</th>
            <th>${vi ? 'Trạng thái' : 'Status'}</th>
            <th>${vi ? 'Tổng giá' : 'Amount'}</th>
            <th>${vi ? 'Ngày tạo' : 'Date'}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${projects.map(p => `
            <tr>
              <td>${p.project_name || (vi ? '(Chưa đặt tên)' : '(Unnamed)')}</td>
              <td><span class="badge badge-${p.status}">${sl[p.status] || p.status}</span></td>
              <td>${p.amount_vnd ? formatVND(p.amount_vnd) : '—'}</td>
              <td>${new Date(p.created_at).toLocaleDateString(vi ? 'vi-VN' : 'en-US')}</td>
              <td><a href="/quote.html?id=${p.id}" class="btn-ghost" style="color:var(--silver)">${t('dash_view')} →</a></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

async function init() {
  const user = await requireAuth();
  if (!user) return;

  document.getElementById('dash-welcome').textContent =
    `${t('dash_welcome')} ${user.user_metadata?.full_name || user.email.split('@')[0]}`;

  setTexts();

  const { data: projects, error } = await _sb
    .from('hw_projects')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) { console.error(error); return; }

  const total   = projects.length;
  const pending = projects.filter(p => p.status === 'pending').length;
  const signed  = projects.filter(p => p.status === 'signed').length;
  const paid    = projects.filter(p => p.status === 'paid').length;

  document.getElementById('s-total').textContent   = total;
  document.getElementById('s-pending').textContent = pending;
  document.getElementById('s-signed').textContent  = signed;
  document.getElementById('s-paid').textContent    = paid;

  renderProjects(projects);
}

init();
