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

  /* ── Scroll-triggered fade-up */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.10 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ── Contact form */
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-submit');
    btn.textContent = 'Message envoyé ✓';
    btn.style.background = '#4ADE80';
    setTimeout(() => {
      btn.textContent = 'Envoyer le message';
      btn.style.background = '';
      this.reset();
    }, 3000);
  });