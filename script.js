
  document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header'); // Target the header element

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) { // Adjust threshold as needed
        header.classList.add('scrolled'); // Add the `scrolled` class
      } else {
        header.classList.remove('scrolled'); // Remove the `scrolled` class
      }
    });
  });

