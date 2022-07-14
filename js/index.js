console.log("Segunda forma de escribir JS");

// Formas de comentar una variable
// Primera forma
var perro = "Arya"
console.log(perro)

// Segunda forma
let perro2 = "Rocky"
perro2 = "Benito"
console.log(perro2)

let nota
// declaramos un valor
nota = 10
let mitad = nota/2
console.log(nota)
console.log(mitad)
console.log(mitad*4);

// Tercera forma
// Variable CONST
const profesion = 'seguros'
console.log(profesion)

// Tipos de datos
// String
let nombre = 'matias'

// Number
let dni = 21874958
console.log(dni);

// Booleans
let definicion = true
console.log(definicion)

// Prompt - forma de ingresar datos
/* let nombreMascota = prompt('ingrese el nombre de su mascota')
let nombreDueno = prompt('ingrese el nombre del dueño')

// Dos formas de concatenar
console.log('el nombre del dueño es '+nombreDueno+ '. Gracias por trar a '+nombreMascota+ ' a nuestra veterinaria');
alert('el nombre de su mascota es ${nombreMascota}, gracias por traerla a nuestra vetarinaria, ${nombreDueno}')


let nota1 = prompt("ingrese la primera nota")
let nota2 = prompt('ingrese segunda nota')

let nota1 = 4
let nota2 = 10
console.log(nota1+nota2);


 */



// NaN - Not a Number - Quiere decir que estamos realizando operaciones entre dos datos que no son numéricos



// Calcule el priomedio de gol de un jugador/a a partir del ingreso de la cantidad de partidos y goles.

/* let nombreJugador = prompt('Ingrese el nombre del Jugador/a')
let cantGoles = prompt('Ingrese la cantidad del goles del jugador/a en la temporada')
let cantPartidos = prompt('Ingrese la cantidad de partidos jugados')
let promedio = cantGoles/cantPartidos
alert(`El promedio de goles de ${nombreJugador} es de ${promedio.toFixed(2)}`)
console.log(promedio);
 */



// Estructura if básica

let preguntaSeguro = "si"
    // Dos == compara, un = asigna valor
if (preguntaSeguro == "si") {
    // Este bloque de código depende de la evaluación de la condición
    console.log("Vamos a solicitarle unos datos para poder cotizar")
    }else {
        console.log("Estos son nuestros teléfonos para cuando necesite cotizar te pongas en contacto con nosotros")
    }

    let cuota = 1600
    if (cuota < 1000) {
        console.log("Cobertura RC");
    }else if (cuota < 2000) {
        console.log("Cobertura Robo Total");
    }else if (cuota < 4000) {
        console.log("Cobertura Total y Parcial");
    }else {
        console.log("Cobertura Todo Riesgo");
    }


    // Variable booleana
    let numero = 10
    let mayorA5 = (numero > 5)
    console.log(mayorA5)
    if (mayorA5){
        console.log("EL numero es mayor a 5")
    }else {
        console.log("El numero no es mayor a 5");
    }


    // if equivalente peros in usar else if
    let color = ""

    if (color == "") {
        console.log("Aqui no se ingresó ningún dato");
    }else{
        if ((color.toLowerCase() == "rojo") || (color.toUpperCase() == "AMARILLO") || (color.toLowerCase() == "azul")) {
            console.log("Este es un color primario")
        }else {
            console.log("Este no es un color primario")
        }
    }

    if (color != "") {        
        if ((color.toLowerCase() == "rojo") || (color.toUpperCase() == "AMARILLO") || (color.toLowerCase() == "azul")) {
            console.log("Este es un color primario")
        }else {
            console.log("Este no es un color primario")
        }
    }else {
        console.log("Aqui no se ingresó ningún dato")
    }


    // EJERCICIO
    // Pedir una nota al usuario y con el uso de condicionales evaluar:
    // Si la nota es mayor a 10 o menor a 0, devolver que no es una nota válida
    // En caso contrario, si la nota es igual a 10 calificar con excelente. Si es mayor a 7 calificar con promocionado, de ser mayor o igual a 4 considerar aprobado y menor a 4 como desaprobado.
    
    let evaluar = 11

    if(evaluar > 10 || evaluar < 0) {
        console.log("Nota invalida, por favor revisar")
    }else if(evaluar == 10){
        console.log("Excelente")
    }else if(evaluar >= 7){
        console.log("Promocionado")
    }else if(evaluar >= 4){
        console.log("Aprobado")
    }else{
        console.log("Desaprobado")
    }



