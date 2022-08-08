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

// Declaración de Funciones
// Funciones empleadas para agregar vehículo a la base de datos
function guardarVehiculo() {
    let anio = document.getElementById("anioInput");
    let marca = document.getElementById("marcaInput");
    let modelo = document.getElementById("modeloInput");
    let valor = document.getElementById("valorInput");
    let nuevoAuto = new Autos(parking.length+1, parseInt(anio.value), marca.value, modelo.value, parseInt(valor.value));
    let result = confirm(`Confirma el ingreso de ${marca.value} ${modelo.value}, año ${anio.value} a la base de datos?`);
        if(result == true) {
            // El auto nuevo se guarda en el array "parking"
            parking.push(nuevoAuto);
            console.table(parking);
        }else{
            alert(`El vehículo ${marca.value} ${modelo.value}, año ${anio.value} NO ha sido guardado.`)
        }
}


// Utilización de ForEach para mostrar el catalogo de autos.
let vehiculos = document.getElementById("vehiculos");
function mostrarCatalogo() {
    parking.forEach((auto)=>{
        let nuevaTarjeta = document.createElement("div");
        nuevaTarjeta.innerHTML = `<article id="${auto.id}" class="cards">
                                    <ul class="description">
                                        <li><strong>Marca: ${auto.marca}</strong></li>
                                        <li>Modelo: ${auto.modelo}</li>
                                        <li>Año: ${auto.anio}</li>
                                        <li><b>Valor: $${auto.valor}</b></li>
                                    </ul>
                                </article>`;
        vehiculos.appendChild(nuevaTarjeta);
    })
}

function ocultarCatalogo () {
    vehiculos.innerHTML = ""; // Mala práctica -- Revisar como hacerlo correctamente.
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
    let busqueda = ""; // declaramos funcion vacio para que cada "case" le de un valor.
    switch(numeroElegido){
        case 0:
            opcionesMenu();
            break;
        case 1:
            busqueda = parking.filter((auto) => auto.marca === "Volkswagen");
            busqueda.forEach((auto)=>console.log(auto.modelo, auto.anio));
            break;
        case 2:
            busqueda = parking.filter((auto) => auto.marca == "Peugeot");
            busqueda.forEach((auto)=>console.log(auto.modelo, auto.anio));
            break;
        case 3:
            busqueda = parking.filter((auto) => auto.marca == "Fiat");
            busqueda.forEach((auto)=>console.log(auto.modelo, auto.anio));
            break;
        case 4:
            busqueda = parking.filter((auto) => auto.marca == "Toyota");
            busqueda.forEach((auto)=>console.log(auto.modelo, auto.anio));
            break;
        case 5:
            busqueda = parking.filter((auto) => auto.marca == "Chevrolet");
            busqueda.forEach((auto)=>console.log(auto.modelo, auto.anio));
            break;
    }
}

// Evento para Catalogo
let verCatalogo = document.getElementById(`catalogo`);
verCatalogo.addEventListener('click', mostrarCatalogo);

let esconderCatalogo = document.getElementById(`ocultar_catalogo`);
esconderCatalogo.addEventListener('click', ocultarCatalogo);

// Evento para Guardar Nuevo Auto
let botonGuardado = document.getElementById("guardar_auto");
botonGuardado.addEventListener("click", guardarVehiculo);