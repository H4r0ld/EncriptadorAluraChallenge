
const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDesencriptar = document.querySelector("#btnDesencriptar");
const txaIngresoTexto = document.querySelector("#txaIngresoTexto");

btnEncriptar.addEventListener("click",encriptar);
btnDesencriptar.addEventListener("click",desencriptar);


function encriptar(){
    console.log(txaIngresoTexto.value)
    
}

function desencriptar(){
    console.log("Desencriptando")
}