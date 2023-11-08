/* contiene alerta! 
variables --  CONDICIONALES ---metodos */
let edad = parseInt(prompt("Por favor, introduce tu edad:"));

if (edad < 18) {
    alert("Oh no, debes ser mayor de 18 años para navegar.");
} else if (edad === null || isNaN(edad) || edad === "") {
    alert("Debes introducir tu edad válida para continuar.");
} else {
    alert("¡Bienvenido! Ahora puedes navegar en el sitio.")
}

/* contiene funciones-- evento--*/
function mostrarFrase() {
    var elemento = document.getElementById("Cian Lú")
    elemento.innerText = "Comprando hoy, desbloquea tu descuento";

}
function reiniciarTexto() {
    var elemento = document.getElementById("Cian Lú");
    elemento.innerText = "Cian Lú";
}



