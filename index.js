document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.testimonial-carousel');
  const linesContainer = document.querySelector('.carousel-lines');
  const cards = carousel.querySelectorAll('.testimonial-card');
  const cardsPerView = 3;

  const totalSlides = Math.ceil(cards.length / cardsPerView);
  let currentIndex = 0;

  // Clear old lines
  linesContainer.innerHTML = '';

  // Create line indicators dynamically
  for (let i = 0; i < totalSlides; i++) {
    const line = document.createElement('span');
    line.classList.add('line');
    if (i === 0) line.classList.add('active');
    line.dataset.index = i;
    linesContainer.appendChild(line);
  }

  const lines = linesContainer.querySelectorAll('.line');

  function updateActiveLine(index) {
    lines.forEach(line => line.classList.remove('active'));
    if (lines[index]) {
      lines[index].classList.add('active');
    }
  }

  function scrollToSlide(index) {
    const cardWidth = cards[0].offsetWidth + 20; // card + gap
    carousel.scrollTo({
      left: cardWidth * cardsPerView * index,
      behavior: 'smooth',
    });
    currentIndex = index;
    updateActiveLine(index);
  }

  lines.forEach(line => {
    line.addEventListener('click', e => {
      scrollToSlide(parseInt(e.target.dataset.index));
    });
  });

  // Detect scroll and update active line
  carousel.addEventListener('scroll', () => {
    const cardWidth = cards[0].offsetWidth + 20;
    const scrollLeft = carousel.scrollLeft;
    const index = Math.round(scrollLeft / (cardWidth * cardsPerView));
    if (index !== currentIndex) {
      currentIndex = index;
      updateActiveLine(currentIndex);
    }
  });
});

  document.querySelectorAll('.faq-item h4').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const toggle = item.querySelector('.toggle');
      const isVisible = answer.style.display === 'block';

      document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
      document.querySelectorAll('.toggle').forEach(tog => tog.textContent = '+');

      if (!isVisible) {
        answer.style.display = 'block';
        toggle.textContent = '−';
      }
    });
  });



