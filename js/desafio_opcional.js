// Crear un algoritmo utilizando un ciclo (for, while, do...while)

let facturacion = 0
let totalFacturacion = 0
let alicuota = 0.045
let impuestoAPagar = 0
let nombre = prompt("Ingresá tu nombre")
let iniciar = prompt("Desea calcular su impuesto?") //Se le pide al usuario si quiere empezar el proceso de calculo

    debugger
    if(iniciar.toLowerCase() == "si"){
        while((iniciar != "no") && (iniciar != "salir")) {
            // Se pide que se ingresen la cantidad de meses que quiere calcular
            let cantidadMeses = parseInt(prompt("Ingrese la cantidad de meses a calcular"))
            for (let i=0; i<cantidadMeses; i++) {
                // Se ejecuta el bucle la cantidad de veces como meses desea calcular, pidiendo un importe por cada uno de esos meses
                facturacion = parseInt(prompt(`Ingrese la nota ${i+1}`))
                totalFacturacion = totalFacturacion + facturacion
                // La consola va arrojando el total acumulado en el proceso
                console.log("El acumulado es de " + totalFacturacion)
            }
            // Cuando termina de ingresar lo importes se calcula cuanto será el impuesto
            impuestoAPagar = totalFacturacion * alicuota
            // La consola arroja los dos resultados finales, el total facturado y el impuesto a pagar
            console.log("El total facturado es de " + totalFacturacion)
            console.log("El importe de impuesto a pagar es de " + impuestoAPagar.toFixed(2))
            alert(`El importe del impuesto a pagar es de ${impuestoAPagar}`)
            // Se pregunta si quiere volver a iniciar otro proceso de calculo
            iniciar = prompt("Desea calcular otro impuesto? En caso no querer, tipear 'salir'")
        }
    }else{
        console.log("Muchas gracias, te esperamos de vuelta cuando nos necesites!");
        alert(`Muchas gracias ${nombre}, te esperamos de vuelta cuando nos necesites`)
    }
    // Si la respuesta a let = iniciar no es "si", la consola arroja un mensaje final y termina el proceso
    if(iniciar != "si"){
        console.log("Muchas gracias, te esperamos de vuelta cuando nos necesites!");
        alert(`Muchas gracias ${nombre}, te esperamos de vuelta cuando nos necesites`)
    }
