(function() {
  emailjs.init("3qeW_wLmuQXVhICss"); 
})();

const btn = document.getElementById("btn-entrar-contato"); 

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  btn.innerText = "Enviando..."; 

  const serviceID = "service_gto6qzz"; 
  const templateID = "template_jdhjzga"; 

  emailjs.sendForm(serviceID, templateID, this)
    .then(function() {
      btn.innerText = "Mensagem Enviada"; 
      Swal.fire({
        icon: 'success',
        title: 'Mensagem Enviada!',
        text: 'Sua mensagem foi enviada com sucesso.',
        confirmButtonText: 'Ok'
      });
      document.getElementById("form").reset(); 
    }, function(err) {
      btn.innerText = "Enviar Mensagem"; 
      Swal.fire({
        icon: 'error',
        title: 'Erro ao Enviar',
        text: 'Houve um erro ao enviar a mensagem: ' + JSON.stringify(err),
        confirmButtonText: 'Ok'
      });
    });
});
