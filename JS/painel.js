var buttonProx = document.getElementById("btnProx");
var buttonStart = document.getElementById("start");
var selectGuiche = document.getElementById("selectGuiche");
var input = document.getElementById("input-guiche");
var bc = new BroadcastChannel('teste');
var viewProx = document.getElementById("view-prox");
var viewStart = document.getElementById("view-start");

buttonProx.setAttribute('onclick','proxima()');
buttonStart.setAttribute('onclick','start()');




function start() {
    console.log(input.value);
    if (input.value=="") {
        alert("Insira um numero!");
    }else{
        for(var i=1;i<=input.value;i++) {
            var option = document.createElement('option');
            option.appendChild(document.createTextNode(i));
            selectGuiche.appendChild(option);
        }

        viewStart.style.display = "none";
        viewProx.style.display = "block";
    }
    
}

function proxima() {
    bc.postMessage(selectGuiche.value);
    alert("O proximo da fila foi chamado!");
}