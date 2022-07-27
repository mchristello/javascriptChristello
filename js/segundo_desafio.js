// Segundo desafío obligatorio


//Declaracion de la clase
class Pasajeros {
    constructor (id, nombre, edad){
        this.id = id,
        this.nombre = nombre,
        this.edad = edad
    }
    mostrarDatos(){
        console.log(`Pasajero N°${this.id} es ${this.nombre}, y tiene ${this.edad}.`);
    }
}

// Declaro la variable vacia para el Array
const grupoViaje = []


// Declaracion de funciones
function agregarPasajero() {
    let nombre = prompt(`Ingrese Nombre y Apellido`);
    let edad = parseInt(prompt(`Ingrese la edad`));
    pasajeroIngresado = new Pasajeros(grupoViaje.length+1, nombre, edad);
    grupoViaje.push(pasajeroIngresado);
}

function armandoGrupo() {
    let pregunta = prompt(`Desea agregar un pasajero al grupo? Si/No`)
    while (pregunta == "si"){
        agregarPasajero();
        pregunta = prompt(`Desea agregar otro pasajero? Si/No`)
    }if (pregunta != "si"){
        alert(`En caso de querer agregar más pasajeros, comuniquesé con nosotros.`)
        console.log(`En caso de querer agregar más pasajeros, comuniquesé con nosotros.`)
        revisarGrupo();
    }
}

function revisarGrupo() {
    for(let personas of grupoViaje){
        personas.mostrarDatos()
    }
}


armandoGrupo();
console.log(grupoViaje);