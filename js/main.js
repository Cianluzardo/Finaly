var edad = 0;

while (edad < 18) {
    edad = prompt("Por favor, introduce tu edad:");

    if (edad === null || isNaN(edad) || edad === "") {
        alert("Debes introducir una edad válida para continuar.");
        continue;
    }
    edad = parseInt(edad);

    if (edad < 18) {
        alert("Lo siento, debes ser mayor de 18 años para navegar.");
    }
}
alert("¡Bienvenido! Ahora puedes navegar en el sitio.");

