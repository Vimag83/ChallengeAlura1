
var btnEncriptar = document.querySelector(".btnEncriptar");
var btnDesencriptar = document.querySelector(".btnDesencriptar");



function encriptar(){
    var texto = document.getElementById("cajaText").value.toLowerCase();
    var textEncriptado = texto.replace(/e/img,"enter");
    textEncriptado = textEncriptado.replace(/o/img, "ober");
    textEncriptado = textEncriptado.replace(/i/img, "imes");
    textEncriptado = textEncriptado.replace(/a/img, "ai");
    textEncriptado = textEncriptado.replace(/u/img, "ufat");
    document.getElementById("graficaDer").style.display = "none";
    document.getElementById("tituloGrafica").style.display = "none";
    document.getElementById("textoGrafica").innerHTML = textEncriptado;
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "inherit";
    
}

function desencriptar(){
    var texto = document.getElementById("cajaText").value.toLowerCase();
    var textEncriptado = texto.replace(/enter/img,"e");
    textEncriptado = textEncriptado.replace(/ober/img, "o");
    textEncriptado = textEncriptado.replace(/imes/img, "i");
    textEncriptado = textEncriptado.replace(/ai/img, "a");
    textEncriptado = textEncriptado.replace(/ufat/img, "u");
    document.getElementById("graficaDer").style.display = "none";
    document.getElementById("tituloGrafica").style.display = "none";
    document.getElementById("textoGrafica").innerHTML = textEncriptado;
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#textoGrafica");
    contenido.select();
    document.execCommand("copy");
    alert("Copia satisfactoria");
}
