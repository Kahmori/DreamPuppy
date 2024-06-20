function salvarEmail() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
  
    if (validarEmail(email)) {
        const mensagemDiv = document.getElementById('mensagem');
        mensagemDiv.textContent = `E-mail cadastrado com sucesso`;
      } else {
        alert('Por favor, digite um e-mail existente.');
      }
    }
    
    function validarEmail(email) {
      // Regex para validar o formato de e-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }