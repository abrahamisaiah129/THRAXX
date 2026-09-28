/**
 * Traxx Footer Component JavaScript
 * Handles newsletter subscription validation and toast notifications.
 */
function handleNewsletterSignup() {
  const input = document.getElementById('footer-email');
  if (!input) return;
  const email = (input.value || '').trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    input.style.borderColor = 'rgba(211,69,47,0.7)';
    input.focus();
    setTimeout(function () { input.style.borderColor = ''; }, 2500);
    return;
  }
  input.value = '';
  input.placeholder = 'You are on the list. Thank you.';
  showToast('You are on the list.', 'Thank you for subscribing to Traxx updates.');
  setTimeout(function () { input.placeholder = 'Your email address'; }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('footer-email');
  if (emailInput) {
    emailInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { handleNewsletterSignup(); }
    });
  }
});

function showToast(title, msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    t.innerHTML = `
      <div class="toast-icon">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div>
        <div class="toast-title" id="toast-title">${title || 'Notice'}</div>
        <div class="toast-msg" id="toast-msg">${msg || ''}</div>
      </div>
      <button class="toast-close" onclick="hideToast()">&times;</button>
    `;
    document.body.appendChild(t);
  } else {
    if (title) document.getElementById('toast-title').textContent = title;
    if (msg) document.getElementById('toast-msg').textContent = msg;
  }
  t.classList.add('show');
  setTimeout(hideToast, 5000);
}

function hideToast() {
  const t = document.getElementById('toast');
  if (t) t.classList.remove('show');
}
