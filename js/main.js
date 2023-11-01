let edad = parseInt(prompt("Por favor, introduce tu edad:"));

    if (edad <18) {
        alert("Oh no, debes ser mayor de 18 años para navegar.");
    } else if (edad === null || isNaN (edad) || edad ===""){
        alert ("Debes introducir tu edad válida para continuar.");
    }else { alert ("¡Bienvenido! Ahora puedes navegar en el sitio.")
}
