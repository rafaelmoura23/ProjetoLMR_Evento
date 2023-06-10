function evento() {
    let nomePalestrante = document.getElementById("pNome").value;
    let nomeEvento = document.getElementById("pEvento").value;
    let numeroParticipantes = document.getElementById("pParticipantes").value;
    let data = document.getElementById("pData").value;

    if (nomePalestrante == 0) {
        alert("Digite o nome do Palestrante")
    } else if (nomeEvento == 0) {
        alert("Digite o nome do Evento")
    } else if (numeroParticipantes <= 0) {
        alert("Digite o Número de Participantes")
    } else if (numeroParticipantes > 100) {
        alert("Excedido o número máximo de Participantes(100)")
    } else {
        alert("Seu evento foi cadastrado com Sucesso!"  + "\n Palestrante: " +nomePalestrante + "\n Nome do Evento: " + nomeEvento 
        + "\n Número de Participantes: "  + numeroParticipantes +
        "\n Data: " + data)

             window.location.href = "index.html";
    }             
    }



function sair(){
    let deslogar = document.getElementById("deslogar").value;

    alert("You logged out!")
    window.location.href = "index.html";
}



