const element = document.querySelector('.element');

// Check for the 'prefers-reduced-motion' media query
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Apply reduced motion styles
  element.style.transition = 'opacity 0.5s ease-in-out';
  element.addEventListener('mouseenter', () => {
    element.style.opacity = '0.7';
  });
  element.addEventListener('mouseleave', () => {
    element.style.opacity = '1';
  });
} else {
  // Apply regular styles
  element.style.transition = 'transform 0.5s ease-in-out';
  element.addEventListener('mouseenter', () => {
    element.style.transform = 'scale(1.1)';
  });
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'scale(1)';
  });
}
