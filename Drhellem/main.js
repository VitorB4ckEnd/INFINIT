/* =============================================
   TOP MÁRMORES — main.js
   ============================================= */

// ----- Header scroll effect -----
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

// ----- Hero slider -----
const slides = document.querySelectorAll('.hero-slide');
const dots   = document.querySelectorAll('.dot');
let current  = 0;
let timer    = setInterval(next, 5000);

function goTo(i) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = i;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}
function next() { goTo((current + 1) % slides.length); }

dots.forEach(d => d.addEventListener('click', () => {
  clearInterval(timer);
  goTo(+d.dataset.index);
  timer = setInterval(next, 5000);
}));

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
      animateCount(document.getElementById('s1'), 500);
      animateCount(document.getElementById('s2'), 200);
      animateCount(document.getElementById('s3'), 1000);
      animateCount(document.getElementById('s4'), 15);
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });
statsObserver.observe(document.querySelector('.stats'));

// ----- FAQ accordion -----
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item   = q.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ----- Form submit -----
document.querySelector('.form-submit').addEventListener('click', () => {
  alert('Mensagem enviada! Em breve entraremos em contato.');
});

// ----- Smooth scroll -----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
