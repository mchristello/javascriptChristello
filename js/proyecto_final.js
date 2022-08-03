// Primera Entrega PROYECTO FINAL DE JS
// COTIZADOR DE SEGURO Y BASE DE DATOS DE AUTOS


// Declaracion de la clase
class Autos {
    constructor(id, anio, marca, modelo, valor) {
        this.id = id,
        this.anio = anio,
        this.marca = marca,
        this.modelo = modelo,
        this.valor = valor
    }
    // Metodos para la clase Autos
        mostrarDatos() {
            console.log(`${this.id}, ${this.marca}, ${this.modelo}, año ${this.anio}. Con un valor de $${this.valor}`)
    }
}



// Declaracion de objetos predefinidos
const auto1 = new Autos(1, 2018, "Peugeot", "208 Allure 1.6", 2500000);
const auto2 = new Autos(2, 2012, "Chevrolet", "Agile LTZ 1.4", 1400000);
const auto3 = new Autos(3, 2015, "Peugeot", "307 Feline 1.6", 3400000);
const auto4 = new Autos(4, 2020, "Toyota", "Corolla 2.0 XEI", 5400000);
const auto5 = new Autos(5, 2022, "Fiat", "Argo 1.3 GSE", 3190000);
const auto6 = new Autos(6, 2019, "Volkswagen", "Golf VII 2.0 GTI", 8800000);
const auto7 = new Autos(7, 2014, "Volkswagen", "Vento 2.0 TDI Sportline", 3360000);
const auto8 = new Autos(8, 2021, "Chevrolet", "Cruze 1.4 Premier 4p", 5000000);
const auto9 = new Autos(9, 2020, "Toyota", "Yaris 1.5 XS", 3550000);
const auto10 = new Autos(10, 2017, "Volkswagen", "Amarok 3.0 4x4 V6 Extreme", 8900000);

const parking = [auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto8, auto9, auto10];

// DOM sobre entrega proyecto FINAL

let vehiculos = document.getElementById("vehiculos");
console.log(vehiculos);

// Tarjetas simples sin CSS 
parking.forEach((auto)=>{
    let nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.innerHTML = `<article id="${auto.id}">
                                <ul class="description">
                                    <li><strong>Marca: ${auto.marca}</strong></li>
                                    <li>Modelo: ${auto.modelo}</li>
                                    <li>Año: ${auto.anio}</li>
                                    <li><b>Valor: $${auto.valor}</b></li>
                                </ul>
                            </article>`;
    vehiculos.appendChild(nuevaTarjeta);
})

// Declaración de Funciones
// Funciones para el menú
function opcionesMenu() {
    let opciones = parseInt(prompt(`Ingrese la opción que desea:
                                    1 - Ingresar un vehículo al catalogo.
                                    2 - Ver el listado de vehículos.
                                    3 - Cotizar seguro para un vehículo.
                                    4 - Para buscar vehículo por MARCA.
                                    5 - Para Salir del menú.`));
    menu(opciones);
}

function menu(elegirMenu) {
    switch (elegirMenu) {
        case 1:
            agregandoVehiculo(); // Ingresar vehículo nuevo
            break;
        case 2:
            mostrarCatalogo() // Catalogo de vehículos
            break;
        case 3:
            paraCotizar() // Cotizar vehículo
            break;
        case 4:
            result = confirm(`Desea hacer busqueda de vehículo por MARCA?`);
            if (result == true){
                busquedaPregunta(); // Buscar vehículo
            }else{
                opcionesMenu();
            }            
            break;
        case 5:
            salir = true;
            alert(`Gracias por usar nuestros servicios, vuelva pronto!!`);
            break;
        default:
            alert(`Ingrese una opción correcta`)
    }
}

// Funciones empleadas para agregar vehículo a la base de datos
function agregandoVehiculo() {
    // Le preguntamos al usuario si quiere ungresar un vehículo a la base de datos
    pregunta = prompt("Quiere ingresar un nuevo vehículo a la base de datos? SI/NO");
    // Si la prespuesta es "si" se invoca la funcion para ingresar datos
    if (pregunta.toLowerCase() == "si") {
        while (pregunta.toLowerCase() != "no") {
            ingreseAuto();
            pregunta = prompt("Quiere ingresar un nuevo vehículo a la base de datos? SI/NO");
            if (pregunta.toLowerCase() != "si"){
                break;
            }
        }
    } else {
        pregunta = prompt("Quiere ir al sector de 'Cotizaciones'?");
        if (pregunta.toLowerCase() == "si") {
            paraCotizar();
        }else{
            opcionesMenu();
        }
    }
}

function ingreseAuto() {
    // Le pedimos al usuario que vaya ingresando los datos del auto
    let anioAuto = parseInt(prompt(`Ingrese el año del vehículo`));
    let marcaAuto = prompt(`Ingrese la MARCA del vehículo`);
    let modeloAuto = prompt(`Ingrese el MODELO del vehículo`);
    let valorAuto = parseInt(prompt(`Ingrese el VALOR del vehículo`));
    nuevoAuto = new Autos(parking.length + 1, anioAuto, marcaAuto, modeloAuto, valorAuto),
    result = confirm(`El vehículo ingresado es un ${marcaAuto}, año ${anioAuto}, modelo ${modeloAuto}, con un valor de $${valorAuto}`)
        if(result == true){
            parking.push(nuevoAuto);
            console.log(nuevoAuto);
        }else{
            agregandoVehiculo();
        };
}

// Utilización de ForEach para mostrar el catalogo de autos.
function mostrarCatalogo() {
    alert(`A continuación podrá ver el listado de vehículos en la consola`);
    parking.forEach((auto)=> auto.mostrarDatos());
}

// Funciones empleadas para cotizar vehículos
const cotizador = (valor, tasa, cobA) => { // Arrow function -- prueba para ver como sale.
    return (valor * tasa) / 6 + cobA;
}

function paraCotizar() {
    alert(`Está ingresando al sector de cotizaciones.`)
    let eleccion = prompt(`Quiere cotizar un vehículo de nuestra base de datos? Si/No.`)
        if(eleccion.toLowerCase() == "si"){
            cotizarDesdeParking()
        }else{
            let anio = parseInt(prompt(`Ingrese el año del vehículo`));
            if (anio <= 2022 && anio >= 2015) {
                valor = parseInt(prompt(`Por favor, ingrese el valor del vehículo.`));
                formulaCotizacion(valor);
            }else{
                alert(`Lo sentimos, en este momento no estamos asegurando vehículos anteriores a 2015`);
            }
        }
}

function cotizarDesdeParking() { 
    let opcionElegida = parseInt(prompt(`Por favor, elija el ID que corresponde al vehículo que quiere cotizar:

                            ${parking[0].id} - ${parking[0].marca}, ${parking[0].modelo}, 
                                Año: ${parking[0].anio}.
                            ${parking[1].id} - ${parking[1].marca}, ${parking[1].modelo}, 
                                Año: ${parking[1].anio}.
                            ${parking[2].id} - ${parking[2].marca}, ${parking[2].modelo}, 
                                Año: ${parking[2].anio}.
                            ${parking[3].id} - ${parking[3].marca}, ${parking[3].modelo}, 
                                Año: ${parking[3].anio}.
                            ${parking[4].id} - ${parking[4].marca}, ${parking[4].modelo}, 
                                Año: ${parking[4].anio}.
                            ${parking[5].id} - ${parking[5].marca}, ${parking[5].modelo}, 
                                Año: ${parking[5].anio}.
                            ${parking[6].id} - ${parking[6].marca}, ${parking[6].modelo}, 
                                Año: ${parking[6].anio}.
                            ${parking[7].id} - ${parking[7].marca}, ${parking[7].modelo}, 
                                Año: ${parking[7].anio}.
                            ${parking[8].id} - ${parking[8].marca}, ${parking[8].modelo}, 
                                Año: ${parking[8].anio}.
                            ${parking[9].id} - ${parking[9].marca}, ${parking[9].modelo},
                                Año: ${parking[9].anio}.`));
    for(let autoElegido of parking){
        if(autoElegido.id == opcionElegida) {
            confirm(`Usted eligió ${autoElegido.marca}, ${autoElegido.modelo}, Año: ${autoElegido.anio}`);
            let valor = autoElegido.valor;
            formulaCotizacion(valor);
        }        
    }
}

function formulaCotizacion(valor) {
    let tasaCobD = 0.026;
    let tasaCobC = 0.016;
    let tasaCobB = 0.010;
    let cobA = 2350;
    opcion = parseInt(prompt(`Elija el número de la cobertura que desea cotizar:
                                                            1 - Todo Riesgo
                                                            2 - Terceros Completo
                                                            3 - Terceros total
                                                            4 - RC Terceros`));
        if (opcion == 1) {
            cotizador(valor, tasaCobD, cobA);
            console.log(`El valor de su cuota, para cobertura D, es de $ ${cotizador(valor, tasaCobD, cobA).toFixed(2)} por mes.`);
            alert(`El valor de su cuota, para cobertura D, es de $ ${cotizador(valor, tasaCobD, cobA).toFixed(2)} por mes.`);
        } else if (opcion == 2) {
            cotizador(valor, tasaCobC, cobA);
            console.log(`El valor de su cuota, para cobertura C, es de $ ${cotizador(valor, tasaCobC, cobA).toFixed(2)} por mes.`);
            alert(`El valor de su cuota, para cobertura C, es de $ ${cotizador(valor, tasaCobC, cobA).toFixed(2)} por mes.`);
        } else if (opcion == 3) {
            cotizador(valor, tasaCobB, cobA);
            console.log(`El valor de su cuota, para cobertura B, es de $ ${cotizador(valor, tasaCobB, cobA).toFixed(2)} por mes.`);
            alert(`El valor de su cuota, para cobertura B, es de $ ${cotizador(valor, tasaCobB, cobA).toFixed(2)} por mes.`);
        } else {
            console.log(`La cobertura básica, RC Contra Terceros, tiene un valor de $2350 por mes.`);
            alert(`La cobertura básica, RC Contra Terceros, tiene un valor de $2350 por mes.`);
        }
}

// Funcion para busqueda de vehiculo en el catalogo
function busquedaPregunta() {
    let pregunta = parseInt(prompt(`Ingrese el número que corresponde a la MARCA de auto que desea buscar:

                        1 - Volkswagen
                        2 - Peugeot
                        3 - Fiat
                        4 - Toyota
                        5 - Chevrolet
                        0 - Salir`));
    busquedaResultado(pregunta);
}

function busquedaResultado (numeroElegido){
    switch(numeroElegido){
        case 0:
            opcionesMenu();
            break;
        case 1:
            let busqueda1 = parking.filter((auto) => auto.marca === "Volkswagen");
                busqueda1.forEach((auto)=>console.log(auto.modelo, auto.anio));
            break;
        case 2:
            let busqueda2 = parking.filter((auto) => auto.marca == "Peugeot");
            busqueda2.forEach((auto)=>console.log(auto.modelo, auto.anio));
            break;
        case 3:
            let busqueda3 = parking.filter((auto) => auto.marca == "Fiat");
            busqueda3.forEach((auto)=>console.log(auto.modelo, auto.anio));
            break;
        case 4:
            let busqueda4 = parking.filter((auto) => auto.marca == "Toyota");
            busqueda4.forEach((auto)=>console.log(auto.modelo, auto.anio));
            break;
        case 5:
            let busqueda5 = parking.filter((auto) => auto.marca == "Chevrolet");
            busqueda5.forEach((auto)=>console.log(auto.modelo, auto.anio));
            break;
    }
}

// CODIGO

let salir
    while (salir != true) {
        opcionesMenu()
    }

// un console.log al fina para mostrar el array Completo
console.log(parking);

