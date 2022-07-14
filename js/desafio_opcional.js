// Crear un algoritmo utilizando un ciclo (for, while, do...while)

/* let facturacion = 0
let totalFacturacion = 0

// Impuesto se calcula en base a alícuota de 4.5%
let alicuota = 0.045 

let impuestoAPagar = 0
let cantidadMeses = parseInt(prompt("Cuantos meses desea calcular?"))

for (let i=0; i<cantidadMeses; i++) {
    facturacion = parseInt(prompt(`Ingrese la nota ${i+1}`))
    totalFacturacion = totalFacturacion + facturacion
    console.log("El acumulado es de " + totalFacturacion)
}
impuestoAPagar = totalFacturacion * alicuota

console.log("El total facturado es de " + totalFacturacion)
console.log("El importe de impuesto a pagar es de " + impuestoAPagar.toFixed(2)) */

// Y si lo hacemos con while?

let facturacion = 0
let totalFacturacion = 0
let alicuota = 0.045
let impuestoAPagar = 0
let iniciar = prompt("Desea calcular su impuesto?")

if(iniciar == "si"){
    while((iniciar != "no") && (iniciar != "salir")) {
        let cantidadMeses = parseInt(prompt("Ingrese la cantidad de meses a calcular"))
        for (let i=0; i<cantidadMeses; i++) {
            facturacion = parseInt(prompt(`Ingrese la nota ${i+1}`))
            totalFacturacion = totalFacturacion + facturacion
            console.log("El acumulado es de " + totalFacturacion)
        }
        impuestoAPagar = totalFacturacion * alicuota
        console.log("El total facturado es de " + totalFacturacion)
        console.log("El importe de impuesto a pagar es de " + impuestoAPagar.toFixed(2))
        iniciar = prompt("Desea calcular otro impuesto? En caso no querer, tipear 'salir'")
    }
}else{
        console.log("Muchas gracias por tenernos en cuenta para calcular sus impuestos");
}
