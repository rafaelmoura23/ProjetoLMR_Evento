function cadastrar(){
    let nome = document.getElementById("pNome").value;
    let sobreNome = document.getElementById("pLastName").value;

    alert("Welcome " +nome+" "+sobreNome+ "!")
    window.location.href = "index.html";
}


function sair(){
    let deslogar = document.getElementById("deslogar").value;
    alert("You logged out!")
    window.location.href = "index.html";
}