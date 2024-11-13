document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal("#projetos .card", {
    delay: 200,
    origin: "bottom", 
    distance: "20px", 
    duration: 800, 
    easing: "ease-in-out", 
    interval: 200, 
    reset: true,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal("#habilidades .col-md-6", {
    delay: 100,
    origin: "left", 
    distance: "20px", 
    duration: 500, 
    easing: "ease-in-out", 
    interval: 100, 
    reset: true,
  });
});

document.addEventListener('click', function(event) {
  var navbar = document.getElementById('navbarNav');
  var isClickInside = navbar.contains(event.target) || event.target.closest('.navbar-toggler');

  if (!isClickInside && navbar.classList.contains('show')) {
    new bootstrap.Collapse(navbar).toggle();
  }
});

document.getElementById('navbarNav').addEventListener('mouseleave', function() {
  if (this.classList.contains('show')) {
    new bootstrap.Collapse(this).toggle();
  }
});

document.querySelectorAll('#projetos a').forEach(link => {
  link.addEventListener('click', (e) => {

    if (link.getAttribute('href') === '' || link.getAttribute('href') === '#') {

      e.preventDefault();
      alert('Projeto disponível em breve!');
    }
  });
});
