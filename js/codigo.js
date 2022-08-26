// CODIGO

// Iniciamos el array paletero
if(localStorage.getItem("paletero")) { // If el array paletero tiene algo cuando cargamos la pagina....
    paletero = JSON.parse(localStorage.getItem("paletero")); // nos traemos eso que tenga.
}

// Iniciamos el carrito de compras con operador OR.
let carritoCompras = JSON.parse(localStorage.getItem("carrito")) || [];

// Elementos del DOM.
let botonCarrito = document.getElementById(`boton_carrito`);
let contadorItems = document.getElementById(`contador`);
let modalBody = document.getElementById("modal-body");
let contenidoModal = document.getElementById(`precioTotal`);
let pagarModal = document.getElementById(`pagar`);

let btnDarkMode = document.getElementById(`btn__dark_mode`);
let btnLightMode = document.getElementById(`btn__light_mode`);
let sectionCatalogo = document.getElementById("catalogo");

let nuevoProducto = document.getElementById(`nuevo_producto`);
let divLoading = document.getElementById(`loading`);


// Botones y eventos

// Boton mostrar productos y evento correspondiente 
let btnMostrarProductos = document.getElementById(`mostrar_productos`);
btnMostrarProductos.addEventListener("click", () => {
    sectionCatalogo.innerHTML = "";
    nuevoProducto.innerHTML = ``;
    divLoading.setAttribute(`style`, `display: block`);
    divLoading.innerHTML = `<div class="d-flex justify-content-center align-items-center">
                                <strong>Cargando el catalogo de productos...</strong>
                                <div class="spinner-border m-5 text-info" style="width: 3rem; height: 3rem;" role="status">
                                </div>
                            </div>`;    
    setTimeout(()=> {                    
        // Se borra el divLoading para darle lugar al catálogo
        divLoading.setAttribute(`style`,`display:none`);
        // Se muestra el catalogo de productos.
        mostrarCatalogo();
    }, 2000);    
});    

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

// Evento para finalizar compra
pagarModal.addEventListener('click', finalizarCompra);

