// Inicialize o EmailJS
(function(){
    emailjs.init("9XuDPRWZbNU0Idclm"); // Substitua "YOUR_USER_ID" pelo seu User ID do EmailJS
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtenha os valores do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Defina os parâmetros do template
    var templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Envie o e-mail usando EmailJS
    emailjs.send('default_service', 'template_28ck4sv', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('statusMessage').innerText = "Mensagem enviada com sucesso!";
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('statusMessage').innerText = "Falha ao enviar a mensagem.";
        });
});
