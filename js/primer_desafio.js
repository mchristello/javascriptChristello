// Primer desafío obligatorio

function declaraNombre() {
    let nombre = prompt("Ingresá tu nombre");
    return nombre;
}

function iniciacion() {
    let iniciar = prompt("Desea calcular su impuesto? (Si/No).");
    return iniciar;
}

function proceso() {
    if(iniciar == "si"){
        while((iniciar != "no") && (iniciar != "salir")) {
            let cantidadFacturas = facturas();
                for (let i=1; i<=cantidadFacturas; i++) {
                    // Se ejecuta el bucle la cantidad de veces como meses desea calcular, pidiendo un importe por cada uno de esos meses
                    facturacion = parseInt(prompt(`Ingrese el importe`));
                    totalFacturacion = totalFacturacion + facturacion;
                    // La consola va arrojando el total acumulado en el proceso
                    console.log("El acumulado es de " + totalFacturacion);
                }
                // Cuando termina de ingresar lo importes se calcula cuanto será el impuesto
                impuestoAPagar = totalFacturacion * alicuota;
                // La consola arroja los dos resultados finales, el total facturado y el impuesto a pagar
                parcial(totalFacturacion, impuestoAPagar);
                alert(`El importe del impuesto a pagar es de $${impuestoAPagar}`);


                // Se pregunta si se le hicieron retenciones
                iniciar = prompt("Le han realizado retenciones sobre su facturacion? Si/No");
                if(iniciar != "si"){
                    break
                }
                retenido = hayRetencion();
                despuesRetenciones(result);


                // Se pregunta si quiere volver a iniciar otro proceso de calculo
                iniciar = prompt("Desea calcular otro impuesto? En caso no querer, tipear 'salir'");
        }
    }
    // Si la respuesta a let = iniciar es diferente a "si", la consola arroja un mensaje final y termina el proceso
    if(iniciar != "si"){
        console.log("Muchas gracias, te esperamos de vuelta cuando nos necesites!");
        alert(`Muchas gracias ${nombre}, te esperamos de vuelta cuando nos necesites`);
        document.write(`Muchas gracias ${nombre}, te esperamos de vuelta cuando nos necesites`);
    }
}

function facturas() {
    let cantidadFacturas = parseInt(prompt("Ingrese la cantidad de facturas a calcular"));
    return cantidadFacturas;
}

function parcial(total, impuesto) {
    console.log("El total de su facturacion es de $" + total);
    console.log("El importe final de impuesto a pagar es de $" + impuesto.toFixed(2));
}

function hayRetencion() {
    let retenido = parseInt(prompt(`Ingrese el importe facturado sobre el que le realizaron la retencion.`));
    importe = totalFacturacion - retenido;
    result = importe * alicuota;
    return result;
}

function retenciones(importe, alicuota){
    let result = importe * alicuota;
    return result;
}

function despuesRetenciones(total) {
    console.log("El importe del impuesto a pagar, descontando las retenciones, es de $" + total);
    alert(`El importe del impuesto a pagar, descontando las retenciones, es de $` + total);
}

let facturacion = 0
let totalFacturacion = 0
let alicuota = 0.045
let impuestoAPagar = 0

let nombre = declaraNombre();
let iniciar = iniciacion();
proceso();
