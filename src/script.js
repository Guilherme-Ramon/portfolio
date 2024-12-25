document.addEventListener("DOMContentLoaded", function () {
  async function carregarProjetos() {
    try {
      const response = await fetch('projetos.json');
      const projetos = await response.json();
      const container = document.getElementById('projetos-container');
      projetos.forEach(projeto => {
        container.innerHTML += `
          <div class="col-md-6 col-lg-4 my-3 scroll-projeto">
            <div class="card bg-dark-custom text-light shadow-sm border-0 rounded-lg overflow-hidden">
              <img src="${projeto.imagem}" class="card-img-top projeto-img" alt="${projeto.titulo}" />
              <div class="card-body p-4">
                <h5 class="card-title text-light font-weight-bold">${projeto.titulo}</h5>
                <p class="card-text text-light">${projeto.descricao}</p>
                <a href="${projeto.link}" class="btn btn-ver-projeto w-100 fs-5 fw-bold" target="_blank">Ver Projeto</a>
              </div>
            </div>
          </div>
        `;
      });
      ScrollReveal().reveal("#projetos .card", {
        delay: 200, origin: "bottom", distance: "20px", duration: 800, easing: "ease-in-out", interval: 200, reset: true
      });
    } catch (error) {
      console.error("Erro ao carregar os projetos:", error);
    }
  }

  async function carregarHabilidades() {
    try {
      const response = await fetch('habilidades.json');
      const habilidades = await response.json();
      const container = document.getElementById('habilidades-container');
      habilidades.forEach(habilidade => {
        container.innerHTML += `
          <div class="col-6 col-md-4">
            <i class="bi ${habilidade.icone} ${habilidade.cor} fs-1" style="font-size: calc(5vw + 10px)"></i>
            <h4 class="mt-2">${habilidade.nome}</h4>
          </div>
        `;
      });
    } catch (error) {
      console.error("Erro ao carregar as habilidades:", error);
    }
  }

  carregarProjetos();
  carregarHabilidades();

  document.addEventListener('click', function(event) {
    var navbar = document.getElementById('navbarNav');
    if (!navbar.contains(event.target) && !event.target.closest('.navbar-toggler') && navbar.classList.contains('show')) {
      new bootstrap.Collapse(navbar).toggle();
    }
  });

  document.getElementById('navbarNav').addEventListener('mouseleave', function() {
    if (this.classList.contains('show')) new bootstrap.Collapse(this).toggle();
  });

  document.querySelectorAll('#projetos a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href') === '' || link.getAttribute('href') === '#') {
        e.preventDefault();
        alert('Projeto disponível em breve!');
      }
    });
  });
});
