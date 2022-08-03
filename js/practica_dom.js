// Trayendo los elementos del formulario html

function datosForm () {

    let nombre = document.getElementById('name').value;
    console.log(nombre);
    let email = document.getElementById('email').value;
    console.log(email);
    let origen = document.getElementById('origen').value;
    console.log(origen);
    let destino = document.getElementById('destino').value;
    console.log(destino);
    let fechaSalida = document.getElementById('fecha_salida').value;
    console.log(fechaSalida);
    let fechaRegreso = document.getElementById('fecha_regreso').value;
    console.log(fechaRegreso);

}

datosForm();

let contacto = document.getElementsByClassName("contacto");
console.log(contacto);

let tituloContacto = document.createElement("div");
tituloContacto.innerText = `Vamos a pedirte unos datos para poder armar tu viaje!`;

contacto.appendChild(tituloContacto);