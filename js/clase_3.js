    // Ciclos o Bucles o Iteraciones

/*     console.log(0);
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4); */

    /* Con un Ciclo repetimos algo las veces que el programador quiera. En este caso repetir el ciclo hasta que la variable llegue a 9 */

    for (let i = 0; i < 10; i++) {
        console.log(i)
    }

    // Pedir un numero al usuario

/*     let numTabla = parseInt(prompt("Ingrese el numero que desea saber la tabla"))
    for (let i = 0; i < 10; i++) {
        console.log(`${numTabla} X ${i} = ${numTabla*i}`)
    } */




    // Relalizar mediante un ciclo for un programa que pida 3 notas al usuario y calcule total y promedio

    // Que ingrese 3 notas
    // Calcular
    // Mostrar resultados

    let nota = 0
    let acum = 0
    let prom = 0
    let cantNotas = parseInt(prompt("Ingrese la cantidad de notas que desea"))

    for (let i=0; i<cantNotas; i++) {
        nota = parseInt(prompt(`Ingrese la nota ${i+1}`))
        acum = acum + nota
        console.log("acumulador parcial" + acum)
    }
    prom = acum / cantNotas

    console.log("La suma total es de " + acum)
    console.log("El promedio es de " + prom)


    // While 

/*     let pregunta = prompt("Desea ingresar una nota?")

    if(pregunta == "si") {
        while((pregunta != "ESC") && (pregunta!="no")){
            let notaWhile = parseInt(prompt("Ingrese una nota"))
            console.log("la nota ingresada es " + notaWhile)
            pregunta = prompt("desea ingresar una nueva nota? *ESC par asalir")
        }
    }else{
        console.log("Muchas gracias")
    } */


    // Do...While

/*     let condicion = true
    do {
        let adivinanza = prompt("que tiene 6 caras y 21 ojos")
        if (adivinanza.toLowerCase()== "dado") {
            console.log("Su respuesta es correcta");
            condicion = false
        }else{
            console.log("Incorrecto, vuelva a intentar");
        }
    }while(condicion) */


    // Crear un ciclo while que vaya sumando numeros ingresados y cuando el acumulador sea mayor a 100 salga del ciclo


/*     let acumulador = 0
    let bandera = true
    while(bandera){
        let numIngresado = parseInt(prompt("ingrese numero a sumar"))
        acumulador = acumulador + numIngresado
        console.log("Acumulador parcial " + acumulador);
        if(acumulador >= 100)
        console.log("Has llegado al final, felicitaciones!");
        bandera = false
    }
 */




    // Fibonacci 

/* let numero = Number(prompt("Ingrese un numero"));
let acumulador = 0;
let acumulador2 = 1;
let acumulador3 = 0;


for (let i = 0; i < numero; i++) {
    
    acumulador3 = acumulador + acumulador2;
    acumulador = acumulador2;
    acumulador2 = acumulador3;

    console.log(acumulador3);
    
}
 */


// Switch

let colores = prompt("ingrese un color")

switch (colores) {
    case "rojo":
        console.log("El color ingresado es el rojo");
        break;
    case "azul":
        console.log("El color ingresado es el Azul");
        break;
    case "Amarillo":
        console.log("EL color ingresado es el amarillo");
        break;
    default:
        console.log("Ingrese un color valido");
        break;
}