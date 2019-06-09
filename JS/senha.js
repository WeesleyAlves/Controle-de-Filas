var senhaAtual = 0;
var guicheAtual = 0;

var bc = new BroadcastChannel('teste');

var divSenha = document.getElementById("valorSenha");
var divGuiche = document.getElementById("valorGuiche");

var tabela = document.getElementById("tabela-chamadas");

divSenha.innerText = senhaAtual;
divGuiche.innerText = guicheAtual;

bc.onmessage = function (e) {
    guicheAtual = e.data;
    proxima();   
}

function proxima() {
    senhaAtual++;
    divSenha.innerText = senhaAtual;
    divGuiche.innerText = guicheAtual;
    addChamada();
}

function addChamada() { 
    var linha = document.createElement("tr");
    linha.setAttribute('id',senhaAtual);

    var colSenha = document.createElement("td");
    var colGuiche = document.createElement("td");
    var ref = document.getElementById(senhaAtual-1);

    colSenha.appendChild(document.createTextNode(senhaAtual));
    colGuiche.appendChild(document.createTextNode(guicheAtual));
    linha.appendChild(colSenha);
    linha.appendChild(colGuiche);
    tabela.insertBefore(linha,ref);

    console.log(ref);
    console.log(tabela);
}

addChamada();
