// js/main.js

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-list li a');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // offset for the fixed header
          behavior: 'smooth'
        });
      }
    });
  });
});
