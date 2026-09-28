/**
 * Traxx Navbar Component JavaScript
 * Handles sticky scroll shadows, mobile menu toggle, and backdrop dismissal.
 */
document.addEventListener('DOMContentLoaded', function() {
  const mainNav = document.getElementById('main-nav');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mainNav) {
    window.addEventListener('scroll', function () {
      mainNav.classList.toggle('scrolled', window.scrollY > 6);
    }, { passive: true });
  }

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', String(isOpen));
      mobileBtn.querySelector('svg').innerHTML = isOpen
        ? '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
        : '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
    });
  }
});

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  if (mobileMenu) mobileMenu.classList.remove('open');
  if (mobileBtn) {
    mobileBtn.setAttribute('aria-expanded', 'false');
    mobileBtn.querySelector('svg').innerHTML = '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
  }
}
