document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const track = document.querySelector(".carousel-track");
  const nextButton = document.querySelector(".carousel-btn");
  if (slides.length === 0) return; // evita erro se não houver slides

  let current = 0;
  let interval;

  let position = 0;
  const cardWidth = 350;

  // Mostrar slide
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  // Próximo slide
  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Slide anterior
  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  // Eventos das setas (verifica se existem)
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });
  }

  // Slide automático
  function startSlide() {
    interval = setInterval(nextSlide, 4000);
  }

  // Reinicia tempo quando clicar
  function resetInterval() {
    clearInterval(interval);
    startSlide();
  }
/* ===== CARROSSEL PROFISSIONAL ===== */
  if (nextButton) {
  nextButton.addEventListener("click", () => {

    const maxScroll = track.scrollWidth - track.clientWidth;

    position += cardWidth;

    if (position > maxScroll) {
      position = 0; // volta para o início
    }

    track.style.transform = `translateX(-${position}px)`;
  });
}

  // Inicializa
  showSlide(current);
  startSlide();

});
