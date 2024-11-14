// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade-in Animation on Scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(section => {
      if (section.getBoundingClientRect().top < window.innerHeight - 50) {
          section.classList.add('visible');
      }
  });
});

// Navbar Toggle for Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
