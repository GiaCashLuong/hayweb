const vi = currentLang === 'vi';
const params = new URLSearchParams(location.search);
const projectId = params.get('id');

document.getElementById('succ-title').textContent = t('succ_title');
document.getElementById('succ-desc').textContent  = t('succ_desc');
document.getElementById('succ-back').textContent  = t('succ_back');
document.getElementById('succ-home').textContent  = vi ? 'Về trang chủ' : 'Back to Home';

// Mark as paid if came from PayOS
async function markPaid() {
  if (!projectId) return;
  await _sb.from('hw_projects').update({ status: 'paid' }).eq('id', projectId);
}

// Confetti burst
function launchConfetti() {
  const colors = ['#C0C0C0', '#E0E0E0', '#FFFFFF', '#B8962E', '#D4AF37'];
  const count = 200;
  const defaults = { origin: { y: 0.7 } };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults, ...opts,
      particleCount: Math.floor(count * particleRatio),
      colors,
    });
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}

markPaid();
setTimeout(launchConfetti, 300);
