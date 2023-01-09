
var btnEncriptar = document.querySelector(".btnEncriptar");
var btnDesencriptar = document.querySelector(".btnDesencriptar");



function encriptar(){
    var texto = document.getElementById("cajaText").value.toLowerCase();
    var textEncriptado = texto.replace(/e/img,"enter");
    var textEncriptado = textEncriptado.replace(/o/img, "ober");
    var textEncriptado = textEncriptado.replace(/i/img, "imes");
    var textEncriptado = textEncriptado.replace(/a/img, "ai");
    var textEncriptado = textEncriptado.replace(/u/img, "ufat");
    document.getElementById("graficaDer").style.display = "none";
    document.getElementById("tituloGrafica").style.display = "none";
    document.getElementById("textoGrafica").innerHTML = textEncriptado;
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "inherit";
    
}

function desencriptar(){
    var texto = document.getElementById("cajaText").value.toLowerCase();
    var textEncriptado = texto.replace(/enter/img,"e");
    var textEncriptado = textEncriptado.replace(/ober/img, "o");
    var textEncriptado = textEncriptado.replace(/imes/img, "i");
    var textEncriptado = textEncriptado.replace(/ai/img, "a");
    var textEncriptado = textEncriptado.replace(/ufat/img, "u");
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
