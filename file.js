// Navbar ke links aur sections ko select karta hai
const navLinks = document.querySelectorAll('.navbar-links .navbar-link');
const sections = document.querySelectorAll('section');
const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');


// Scroll karne par current section ko identify karta hai
window.addEventListener('scroll', () => {
  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.getAttribute('id');
    }
  });


  // Current section ke navbar link ko active karta hai
  navLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
});


// Hamburger menu ko open aur close karta hai
if (navbarToggle && navbarLinks) {
  navbarToggle.addEventListener('click', () => {

    navbarToggle.classList.toggle('is-open');
    navbarLinks.classList.toggle('is-open');

    const isExpanded =
      navbarToggle.getAttribute('aria-expanded') === 'true';

    navbarToggle.setAttribute('aria-expanded', !isExpanded);
  });


  // Navbar link click hone par mobile menu close karta hai
  navLinks.forEach(link => {
    link.addEventListener('click', () => {

      navbarToggle.classList.remove('is-open');
      navbarLinks.classList.remove('is-open');
      navbarToggle.setAttribute('aria-expanded', 'false');

    });
  });
}
