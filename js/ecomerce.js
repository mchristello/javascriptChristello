// Declaración de CLASE 
class Items {
    constructor(id, tipo, imagen, marca, modelo, anio, precio) {
        this.id = id
        this.tipo = tipo
        this.imagen = imagen
        this.marca = marca
        this.modelo = modelo
        this.anio = anio
        this.precio = precio
    };
}


let items1 = new Items(1,`Pala`, `img/AT10_18k.webp`, `Nox`, `AT10 18k`, 2022, 60500);
let items2 = new Items(2,`Pala`, `img/ML10_ProCup.webp`, `Nox`, `ML10 Pro Cup`, 2022, 60500);
let items3 = new Items(3,`Pala`, `img/Head_AlphaElite.jpg`, `Head`, `Alpha Elite`, 2022, 64400);
let items4 = new Items(4,`Pala`, `img/Head_DeltaPro.jpg`, `Head`, `Delta Pro`, 2022, 74500);
let items5 = new Items(5,`Pala`, `img/Bullpadel_Hack03.jpg`, `Bullpadel`, `Hack 03`, 2022, 119900);
let items6 = new Items(6,`Pala`, `img/Bullpadel_Vertex03.jpg`, `Bullpadel`, `Vertex 03`, 2022, 126000);
let items7 = new Items(7,`Pala`, `img/Babolat_AirViper.jpg`, `Babolat`, `Air Viper`, 2022, 94500);
let items8 = new Items(8,`Pala`, `img/Babolat_TechnicalViper.webp`, `Babolat`, `Technical Viper`, 2022, 94500);
let items9 = new Items(9, `Zapatilla`, `img/Zapatillas_AT10_Rojo.webp`, `Nox`, `AT10 Rojo/Negro`, 2022, 34900);
let items10 = new Items(10, `Zapatilla`, `img/Head_SprintPro.jpg`, `Head`, `Head Sprint Pro`, 2021, 28600);
let items11 = new Items(11, `Zapatilla`, `img/Head_SprintEvo.jpg`, `Head`, `Head Sprint Evo`, 2022, 31500);
let items12 = new Items(12, `Zapatilla`, `img/Bullpadel_ZapatillaVertex.jpg`, `Bullpadel`, `Vertex`, 2022, 30700);
let items13 = new Items(13, `Zapatilla`, `img/Bullpadel_ZapatillaHack.jpg`, `Bullpadel`, `Hack`, 2022, 29500);
let items14 = new Items(14, `Zapatilla`, `img/Babolat_JetPremura.jpg`, `Babolat`, `Jet Premura`, 2021, 25500);
let items15 = new Items(15, `Bolso`, `img/Head_TourTeamPadelBag.jpg`, `Head`, `Tour Team`, 2021, 21500);
let items16 = new Items(16, `Bolso`, `img/Head_ElitePadelBag.jpg`, `Head`, `Elite Padel`, 2021, 22500);
let items17 = new Items(17, `Bolso`, `img/Bullpadel_BolsoVertex.jpg`, `Bullpadel`, `Vertex`, 2022, 24900);
let items18 = new Items(18, `Bolso`, `img/Bullpadel_BolsoFlow.jpg`, `Bullpadel`, `Flow`, 2020, 19800);
let items19 = new Items(19, `Bolso`, `img/Bolso_AT10.webp`, `Nox`, `AT10`, 2021, 21400);

let paletero = [];

// Iniciamos el carrito de compras con operador OR.
const carritoCompras = JSON.parse(localStorage.getItem("carrito")) || [];

// Elementos del DOM.
let botonCarrito = document.getElementById(`boton_carrito`);
let contadorItems = document.getElementById(`contador`);
let modalBody = document.getElementById("modal-body");
let finalizarCompra = document.getElementById(`pagar`);
let contenidoModal = document.getElementById(`precioTotal`);


let btnDarkMode = document.getElementById(`btn__dark_mode`);
let btnLightMode = document.getElementById(`btn__light_mode`);
let sectionCatalogo = document.getElementById("catalogo");

let nuevoProducto = document.getElementById(`nuevo_producto`);

let portada = document.getElementById(`portada`);
portada.innerHTML = `<img class="portada_img"src="./img/portada_light.jpg" alt="Imagen palas y pelotas">`;


// Evento para dark mode y light mode
let darkMode
(localStorage.getItem("darkMode")) ? darkMode = localStorage.getItem("darkMode") : (localStorage.setItem("darkMode", "light"));

if(darkMode == "dark"){
    document.body.classList.add("dark_mode");
    portada.innerHTML = `<img class="portada_img"src="./img/portada.webp" alt="Imagen palas y pelotas">`;  
}
btnDarkMode.addEventListener("click", ()=>{
    document.body.classList.add("dark_mode")
    localStorage.setItem("darkMode", "dark")
    portada.innerHTML = `<img class="portada_img"src="./img/portada.webp" alt="Imagen palas y pelotas">`;
})
btnLightMode.addEventListener("click", ()=>{
    document.body.classList.remove("dark_mode")
    localStorage.setItem("darkMode", "light")
    portada.innerHTML = `<img class="portada_img"src="./img/portada_light.jpg" alt="Imagen palas y pelotas">`;
})

//  Botones y eventos
// Boton mostrar productos y evento correspondiente 
let btnMostrarProductos = document.getElementById(`mostrar_productos`);
btnMostrarProductos.addEventListener("click", mostrarCatalogo);

// Boton ocultar productos y su evento correspondiente
let btnOcultarProductos = document.getElementById(`ocultar_productos`);
btnOcultarProductos.addEventListener('click', ocultarCatalogo);

// Boton crear producto y su evento correspondiente 
let btnCrearProducto = document.getElementById(`crear_producto`);
btnCrearProducto.addEventListener('click', crearProducto);

// Evento para Boton Carrito.
botonCarrito.addEventListener('click', ()=> {
    mostrarProductosCarrito(carritoCompras);
})

// Iniciamos el array paletero
if(localStorage.getItem("paletero")) { // If el array paletero tiene algo cuando cargamos la pagina....
    paletero = JSON.parse(localStorage.getItem("paletero")); // nos traemos eso que tenga.
}else {
    paletero.push(items1, items2, items3, items4, items5, items6, items7, items8, items9, items10, items11, items12, items13, items14, items15, items16, items17, items18, items19); //empujamos al paletero todos los items que hayan en el array.
    localStorage.setItem("paletero", JSON.stringify(paletero)); // y los cargamos al localStorage.
}

// Declaración de FUNCIONES
function mostrarCatalogo() {
    sectionCatalogo.innerHTML = "";
    nuevoProducto.innerHTML = ``;
    portada.innerHTML = "";
    paletero.forEach((item)=>{
        let nuevoItem = document.createElement(`div`);
        nuevoItem.innerHTML = `<article id="${item.id}" class="card">
                                    <h3 class="card__titulo">${item.marca} ${item.modelo}</h3>
                                    <img class="card__img" src="${item.imagen}" alt="${item.marca} ${item.modelo}">
                                    <div class="card__contenido">
                                        <p class="card__texto">${item.tipo}</p>
                                        <p class="card__texto">${item.marca} ${item.modelo}</p>
                                        <p class="card__texto">${item.anio}</p>
                                        <p class="card__precio">$${item.precio}</p>
                                        <button class="btn_agregar" id="boton_agregar${item.id}"> Agregar al Carrito </button>
                                    </div>
                                </article>`
        sectionCatalogo.appendChild(nuevoItem);
        // Evento para agregar los productos al carrito.
        let btnAgregar = document.getElementById(`boton_agregar${item.id}`);
        btnAgregar.addEventListener("click", () => {agregarItem(item)});
    })
}

function ocultarCatalogo() {
    sectionCatalogo.innerHTML = "";
    nuevoProducto.innerHTML = ``;
    darkMode == "dark"?portada.innerHTML = `<img class="portada_img" src="./img/portada.webp" alt="Imagen palas y pelotas">`:portada.innerHTML = `<img class="portada_img"src="./img/portada_light.jpg" alt="Imagen palas y pelotas">`;
}

function crearProducto() {
    nuevoProducto.innerHTML = ``;
    portada.innerHTML = "";
    sectionCatalogo.innerHTML = "";
    let agregarProdcuto = document.createElement(`div`);
    agregarProdcuto.setAttribute(`class`, `formulario_producto`);
    agregarProdcuto.innerHTML = `<h3>Crear producto para venta</h3>
                                <form>
                                    <label for="tipo" class="labels">Tipo</label>
                                    <input type="text" id="tipo_input" class="inputs">
                                    <label for="marca" class="labels">Marca</label>
                                    <input type="text" id="marca_input" class="inputs">
                                    <label for="modelo" class="labels">Modelo</label>
                                    <input type="text" id="modelo_input" class="inputs">
                                    <label for="año" class="labels">Año</label>
                                    <input type="text" id="anio_input" class="inputs">
                                    <label for="precio" class="labels">Precio</label>
                                    <input type="text" id="precio_input" class="inputs">
                                </form>
                                <button id="boton_guardar" class="boton"> Guardar</button>`;
    nuevoProducto.appendChild(agregarProdcuto);
    let btnGuardar = document.getElementById(`boton_guardar`);
    btnGuardar.addEventListener(`click`, guardarNuevo);
}

function guardarNuevo() {
    let tipoInput = document.getElementById(`tipo_input`).value;
    let marcaInput = document.getElementById(`marca_input`).value;
    let modeloInput = document.getElementById(`modelo_input`).value;
    let anioInput = document.getElementById(`anio_input`).value;
    let precioInput = document.getElementById(`precio_input`).value;
    itemCreado = new Items(parseInt(paletero.length+1), tipoInput, "./img/generico.jpg", marcaInput, modeloInput, parseInt(anioInput), parseInt(precioInput));
    Toastify({
        text: `Agregaste ${tipoInput} ${marcaInput}`,
        duration: 2000,
        newWindow: false,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #8a2387, #e94057, #f27121)",
        }
    }).showToast();
    paletero.push(itemCreado);
    localStorage.setItem("paletero", JSON.stringify(paletero));
}

function agregarItem(item) {
    Swal.fire({
        title: 'Excelente!',
        text: `Agregaste ${item.tipo} ${item.marca} ${item.modelo}`,
        icon: 'success',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
    })
    carritoCompras.push(item);
    // Se carga al storage para que se mantenga en el carrito si cierra la pestaña
    localStorage.setItem("carrito", JSON.stringify(carritoCompras));
}

function mostrarProductosCarrito(productosDelStorage) {
    modalBody.innerHTML = "";
    productosDelStorage.forEach((item) => {
        modalBody.innerHTML += `<article id="${item.id}" class="card">
                                    <h3 class="card__titulo">${item.marca} ${item.modelo}</h3>
                                    <img class="card__img" src="${item.imagen}" alt="${item.marca} ${item.modelo}">
                                    <div class="card__contenido">
                                        <p class="card__texto--tipo">${item.tipo}</p>
                                        <p class="card__texto--marca">${item.marca} ${item.modelo}</p>
                                        <p class="card__texto--año">${item.anio}</p>
                                        <p class="card__precio">$${item.precio}</p>
                                        <button class="btn_agregar" id="eliminar${item.id}">Eliminar del Carrito</button>
                                    </div>
                                </article>`;
    })
    totalCompra(...productosDelStorage);

    productosDelStorage.forEach((item, index)=> {
        document.getElementById(`eliminar${item.id}`).addEventListener(`click`, () => {
            Swal.fire({
                title: `Lo has eliminado!`,
                text: `Has eliminado ${item.tipo} ${item.marca} ${item.modelo} del carrito`,
                icon: `warning`,
                confirmButtonText: `OK`
            })
            let productoEliminado = document.getElementById(`${item.id}`)
            productoEliminado.remove();

            carritoCompras.splice(index, 1);
            localStorage.setItem(`carrito`, JSON.stringify(carritoCompras));
            mostrarProductosCarrito(carritoCompras)
        })
    })
}

// let botonEliminar = document.getElementsByClassName(`btn_agregar`);
// for(let i=0; i < botonEliminar.length; i++) {
//     botonEliminar[i].addEventListener(`click`, eliminarItem);
// }

// function eliminarItem(){
//     console.log(this.id);
// }

function totalCompra(...totalProductos) {  // Spread para la funcion del importe total del carrito.
    acumulador = 0;
    acumulador = totalProductos.reduce((acc, item) => {
        return acc + item.precio
    }, 0);
    acumulador>0 ? contenidoModal.innerHTML = `El total de su compra es $${acumulador}` : contenidoModal.innerHTML=`<p>No hay prodcutor en el Carrito</p>`; // Acumulador con Operador Ternario.
}

// Desestructurar el array
let [a, b, , c, d, e, , , , , , , , , , , , , , f] = paletero;
console.log(a);
console.log(b);
console.log(c);
console.log(paletero);
console.log(f);