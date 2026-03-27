/* =============================================
   DRA. HELEN KAUANE — landing.js
   ============================================= */

// ----- Header scroll effect -----
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// ----- Counter animation -----
function animateCount(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const tick = () => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start);
    if (start < target) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCount(document.getElementById('c1'), 300);
      animateCount(document.getElementById('c2'), 6);
      animateCount(document.getElementById('c3'), 5);
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.6 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ----- Reveal on scroll -----
const revealItems = document.querySelectorAll('.mat-card, .ben-card, .cred');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.animationDelay = (i * 0.06) + 's';
      e.target.classList.add('revealed');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

revealItems.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mat-card, .ben-card, .cred').forEach(el => {
    if (el.classList.contains('revealed')) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
});

// Revealed class triggers transition
const style = document.createElement('style');
style.textContent = '.revealed { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// ----- Form submit -----
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-btn');
  btn.textContent = '✓ Mensagem enviada!';
  btn.style.background = '#3d8a7e';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Enviar mensagem →';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}

// ----- Smooth scroll -----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});