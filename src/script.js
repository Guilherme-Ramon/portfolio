// Inicializando o ScrollReveal e aplicando o efeito aos cards
document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal("#projetos .card", {
    delay: 200,
    origin: "bottom", // A animação começa de baixo para cima
    distance: "20px", // Distância do movimento
    duration: 800, // Duração da animação em milissegundos
    easing: "ease-in-out", // Efeito de aceleração
    interval: 200, // Intervalo entre as animações dos itens
    reset: true,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal("#habilidades .col-md-6", {
    delay: 100,
    origin: "left", // A animação começa de baixo para cima
    distance: "20px", // Distância do movimento
    duration: 500, // Duração da animação em milissegundos
    easing: "ease-in-out", // Efeito de aceleração
    interval: 100, // Intervalo entre as animações dos itens
    reset: true,
  });
});

// Fecha o menu quando clicado fora
document.addEventListener('click', function(event) {
  var navbar = document.getElementById('navbarNav');
  var isClickInside = navbar.contains(event.target) || event.target.closest('.navbar-toggler');

  if (!isClickInside && navbar.classList.contains('show')) {
    new bootstrap.Collapse(navbar).toggle();
  }
});

// Fecha o menu quando o mouse sai da área do menu
document.getElementById('navbarNav').addEventListener('mouseleave', function() {
  if (this.classList.contains('show')) {
    new bootstrap.Collapse(this).toggle();
  }
});

// Seleciona todos os links dentro da seção de projetos
document.querySelectorAll('#projetos a').forEach(link => {
  link.addEventListener('click', (e) => {
    // Verifica se o href do link está vazio ou é apenas um hash #
    if (link.getAttribute('href') === '' || link.getAttribute('href') === '#') {
      // Impede a navegação e exibe uma mensagem de alerta
      e.preventDefault();
      alert('Projeto disponível em breve!');
    }
  });
});
