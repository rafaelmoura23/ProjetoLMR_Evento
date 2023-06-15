function Login() {
  let email = document.getElementById("pEmail").value;
  let senha = document.getElementById("pSenha").value;
  let check = document.getElementById("pCheck").value;

  if (email == 0) {
      alert("Digite o seu Email")
  } else if (senha == 0) {
      alert("Digite a Senha")
  } else {
      alert("Login Efetuado!")
      window.location.href = "index.html";
  }
}