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
      alert("Mensagem enviada com sucesso!");
      document.getElementById("form").reset(); 
    }, function(err) {
      btn.innerText = "Enviar Mensagem"; 
      alert("Erro ao enviar a mensagem: " + JSON.stringify(err));
    });
});
