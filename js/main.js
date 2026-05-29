/* ── Navbar scroll shadow */
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 20);
});

/* ── Active nav link on scroll */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-lk');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
});

/* ── Fermer le menu mobile au clic sur un lien */
document.querySelectorAll('#navMenu .nav-lk, #navMenu .btn-nav').forEach(link => {
  link.addEventListener('click', () => {
    const navMenu    = document.getElementById('navMenu');
    const bsCollapse = bootstrap.Collapse.getInstance(navMenu);
    if (bsCollapse) bsCollapse.hide();
  });
});

/* ── Scroll-triggered fade-up */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.10 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

