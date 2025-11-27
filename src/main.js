// Scroll Animation Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Elements to animate
document.querySelectorAll('.section-title, .card, .function-item, .example-row, .structure-part').forEach(el => {
  el.classList.add('fade-in-section');
  observer.observe(el);
});
