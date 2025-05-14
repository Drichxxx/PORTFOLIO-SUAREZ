// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Get all sections
  const homeSection = document.getElementById('home');
  const aboutSection = document.getElementById('about');
  const contactSection = document.getElementById('contact');

  // Get all nav links
  const navLinks = document.querySelectorAll('.navbar a');

  // Handle navigation click
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Remove active class from all links
      navLinks.forEach(nav => nav.classList.remove('active'));

      // Add active class to the clicked link
      this.classList.add('active');

      // Hide all sections
      homeSection.style.display = 'none';
      aboutSection.style.display = 'none';
      contactSection.style.display = 'none';

      // Show the selected section
      const targetId = this.getAttribute('href').substring(1); // get "home", "about", or "contact"
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = 'block';
      }
    });
  });

  // Show the home section by default
  homeSection.style.display = 'block';
});
