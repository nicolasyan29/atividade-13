document.getElementById("cadastroForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const inputs = this.querySelectorAll("input[required], textarea[required]");
  let valido = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      valido = false;
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = "#ccc";
    }
  });

  if (valido) {
    alert("Formulário enviado com sucesso!");
    this.reset();
  } else {
    alert("Por favor, preencha todos os campos obrigatórios corretamente.");
  }
});