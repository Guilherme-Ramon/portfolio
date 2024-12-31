<<<<<<< HEAD

  // Inicializa o EmailJS com a chave pública
  (function() {
    emailjs.init("3qeW_wLmuQXVhICss"); // Substitua pela sua chave pública
  })();
// Inicializa o EmailJS com a chave pública
(function () {
    emailjs.init("3qeW_wLmuQXVhICss"); // Substitua pela sua chave pública
})();

const btn = document.getElementById("btn-entrar-contato"); // O botão para envio

// Adicionando o evento de envio do formulário

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    btn.innerText = "Enviando..."; // Altera o texto do botão para indicar que está enviando

    const serviceID = "service_gto6qzz"; // Substitua pelo seu service ID
    const templateID = "template_jdhjzga"; // Substitua pelo seu template ID

    // Envia o formulário usando o método sendForm do EmailJS
    emailjs.sendForm(serviceID, templateID, this).then(
        function () {
            btn.innerText = "Mensagem Enviada"; // Altera o texto para indicar sucesso
            alert("Mensagem enviada com sucesso!");
            document.getElementById("form").reset(); // Limpa o formulário
        },
        function (err) {
            btn.innerText = "Enviar Mensagem"; // Restaura o texto do botão em caso de erro
            alert("Erro ao enviar a mensagem: " + JSON.stringify(err));
        }
    );
});

  const btn = document.getElementById('btn-entrar-contato');  // O botão para envio

  // Adicionando o evento de envio do formulário

  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    btn.innerText = 'Enviando...';  // Altera o texto do botão para indicar que está enviando

    const serviceID = 'service_gto6qzz';  // Substitua pelo seu service ID
    const templateID = 'template_jdhjzga';  // Substitua pelo seu template ID

    // Envia o formulário usando o método sendForm do EmailJS
    emailjs.sendForm(serviceID, templateID, this)
      .then(function() {
        btn.innerText = 'Mensagem Enviada';  // Altera o texto para indicar sucesso
        alert('Mensagem enviada com sucesso!');
        document.getElementById('form').reset();  // Limpa o formulário
      }, function(err) {
        btn.innerText = 'Enviar Mensagem';  // Restaura o texto do botão em caso de erro
        alert('Erro ao enviar a mensagem: ' + JSON.stringify(err));
      });
  });

=======

  // Inicializa o EmailJS com a chave pública
  (function() {
    emailjs.init("3qeW_wLmuQXVhICss"); // Substitua pela sua chave pública
  })();

  const btn = document.getElementById('btn-entrar-contato');  // O botão para envio

  // Adicionando o evento de envio do formulário

  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    btn.innerText = 'Enviando...';  // Altera o texto do botão para indicar que está enviando

    const serviceID = 'service_gto6qzz';  // Substitua pelo seu service ID
    const templateID = 'template_jdhjzga';  // Substitua pelo seu template ID

    // Envia o formulário usando o método sendForm do EmailJS
    emailjs.sendForm(serviceID, templateID, this)
      .then(function() {
        btn.innerText = 'Mensagem Enviada';  // Altera o texto para indicar sucesso
        alert('Mensagem enviada com sucesso!');
        document.getElementById('form').reset();  // Limpa o formulário
      }, function(err) {
        btn.innerText = 'Enviar Mensagem';  // Restaura o texto do botão em caso de erro
        alert('Erro ao enviar a mensagem: ' + JSON.stringify(err));
      });
  });

>>>>>>> 3cfdafb (Atualização do código do portfólio)
