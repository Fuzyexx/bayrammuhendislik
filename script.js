const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
function setMenu(open) {
  nav?.classList.toggle('open', open);
  toggle?.setAttribute('aria-expanded', String(open));
  toggle?.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
}
if (toggle && nav) {
  document.documentElement.classList.add('menu-ready');
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); toggle.focus(); }
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', () => setMenu(false));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
