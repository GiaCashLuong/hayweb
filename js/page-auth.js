let isLogin = true;
const vi = currentLang === 'vi';

function setTexts() {
  document.getElementById('auth-quote').textContent = t('auth_quote_msg');
  document.getElementById('auth-title').textContent = isLogin ? t('auth_login') : t('auth_register');
  document.getElementById('auth-subtitle').textContent = isLogin
    ? (vi ? 'Chào mừng trở lại! Đăng nhập để tiếp tục.' : 'Welcome back! Sign in to continue.')
    : (vi ? 'Tạo tài khoản miễn phí để bắt đầu.' : 'Create a free account to get started.');
  document.getElementById('btn-google-text').textContent = t('auth_google');
  document.getElementById('auth-or').textContent = t('or');
  document.getElementById('lbl-email').textContent = t('auth_email');
  document.getElementById('lbl-pass').textContent = t('auth_password');
  document.getElementById('auth-submit').textContent = isLogin ? t('auth_login') : t('auth_register');
  const nameGroup = document.getElementById('name-group');
  if (!isLogin) {
    nameGroup.style.display = 'block';
    document.getElementById('lbl-name').textContent = t('auth_name');
    document.getElementById('input-pass').setAttribute('autocomplete', 'new-password');
  } else {
    nameGroup.style.display = 'none';
  }
  document.getElementById('auth-toggle').innerHTML = isLogin
    ? `${t('auth_no_acc')} <a href="#" id="toggle-link">${t('auth_register')}</a>`
    : `${t('auth_have_acc')} <a href="#" id="toggle-link">${t('auth_login')}</a>`;
  document.getElementById('toggle-link').addEventListener('click', e => {
    e.preventDefault();
    isLogin = !isLogin;
    setTexts();
    document.getElementById('auth-error').textContent = '';
  });
}

async function checkAlreadyLoggedIn() {
  const user = await getUser();
  if (user) window.location.href = '/dashboard.html';
}

document.getElementById('btn-google').addEventListener('click', async () => {
  const btn = document.getElementById('btn-google');
  btn.disabled = true;
  const { error } = await _sb.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin + '/dashboard.html' }
  });
  if (error) {
    document.getElementById('auth-error').textContent = error.message;
    btn.disabled = false;
  }
});

document.getElementById('auth-form').addEventListener('submit', async e => {
  e.preventDefault();
  const errEl = document.getElementById('auth-error');
  const submit = document.getElementById('auth-submit');
  errEl.textContent = '';
  submit.disabled = true;
  submit.textContent = t('loading');

  const email = document.getElementById('input-email').value.trim();
  const pass  = document.getElementById('input-pass').value;
  const name  = document.getElementById('input-name')?.value.trim() || '';

  try {
    if (isLogin) {
      const { error } = await _sb.auth.signInWithPassword({ email, password: pass });
      if (error) throw error;
      window.location.href = '/dashboard.html';
    } else {
      const { data, error } = await _sb.auth.signUp({
        email, password: pass,
        options: { data: { full_name: name } }
      });
      if (error) throw error;
      if (data.session) {
        window.location.href = '/dashboard.html';
      } else {
        errEl.style.color = 'var(--success)';
        errEl.textContent = vi
          ? 'Đã gửi email xác nhận. Vui lòng kiểm tra hộp thư.'
          : 'Confirmation email sent. Please check your inbox.';
      }
    }
  } catch (err) {
    errEl.style.color = 'var(--danger)';
    errEl.textContent = err.message || t('error');
  } finally {
    submit.disabled = false;
    setTexts();
  }
});

checkAlreadyLoggedIn();
setTexts();
