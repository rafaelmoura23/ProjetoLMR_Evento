function cadastrar(){
    let nome = document.getElementById("pNome").value;
    let sobreNome = document.getElementById("pLastName").value;
    let email = document.getElementById("pEmail").value;
    let senha = document.getElementById("pSenha").value;

    if(nome == 0){
        alert("Digite o seu Nome")
    } else if(sobreNome==0){
        alert("Digite o seu SobreNome")
    } else if(email == 0){
        alert("Digite o seu Email")
    } else if (senha == 0){
        alert("Defina sua Senha")
    } else{
        alert("Welcome " +nome+" "+sobreNome+ "!")
        window.location.href = "index.html";
    }
}


function sair(){
    let deslogar = document.getElementById("deslogar").value;
    alert("You logged out!")
    window.location.href = "index.html";
}