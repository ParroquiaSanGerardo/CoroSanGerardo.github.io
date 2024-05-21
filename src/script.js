var codigos = {
    "001": "Tu disfraz es de caperucita roja",
    "002": "Tu disfraz es Blancanieves",
    "003": "Tu disfraz es de príncipe",
    "007": "Siuuuuuuuuuuuuuuu te disfrazas del bicho",
    "033": "Tu disfraz es de Jesucristo o del nano",
    "069": "Te toca disfrazarte de Nacho vidal",
    "666": "Arderás en el caldero de satán si no te disfrazas del diablo",
    "bicholover": "Te tienes que disfrazar de entrenador Pokemon",
    "lolinator": "Lolinator extermina bichos y convalida duchas. Disfrazate de cuasimodo",
    "coco": "Disfrázate de pantera rosa. El bollo más marica"
};
var contadorErrores = 0;
var contadorTotalErrores = 0;
var ultimoCodigoCorrecto = true;

function validarCodigo() {
    limpiarResultado();
    var codigoUsuario = document.getElementById("codigo").value;
    if (codigoUsuario === "") {
        return;
    }
    if (codigoUsuario in codigos) {
        if (!ultimoCodigoCorrecto) {
            contadorErrores = 0;
            document.getElementById("codigoErroneo").innerText = "";
        }
        ultimoCodigoCorrecto = true;
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.style.display = "flex";
        var texto = codigos[codigoUsuario];
        resultadoDiv.innerHTML += "<span font-weight: bold;'>" + texto + "</span>";
        document.getElementById("botonMenuPrincipal").style.display = "inline-block";
        document.getElementById("formulario").style.display = "none";
    } else {
        ultimoCodigoCorrecto = false;
        contadorErrores++;
        contadorTotalErrores++;
        mostrarContadorErrores(contadorErrores);
        document.getElementById("codigoErrores").style.display = "none";
        var codigoErroneoDiv = document.getElementById("codigoErroneo");
        var mensaje = "¡Código Erróneo! ";
        if (contadorErrores > 1) {
            mensaje += contadorErrores + " Errores";
        }
        codigoErroneoDiv.innerText = mensaje;
    }
}
function limpiarResultado() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
}
function mostrarContadorErrores(contador) {
    var contadorDiv = document.getElementById("codigoErroneo");
    contadorDiv.innerText = "¡Código Erróneo! " + contador + " Errores";
}
function irAlMenu() {
    document.getElementById("formulario").style.display = "block";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("botonMenuPrincipal").style.display = "none";
}
window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("codigo").addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            validarCodigo();
        }
    });
});