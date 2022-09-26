// CODIGO

// Iniciamos el array paletero
if (localStorage.getItem("paletero")) { // If el array paletero tiene algo cuando cargamos la pagina....
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
let formPago = document.getElementById(`formulario_pago`);

let sectionCatalogo = document.getElementById("catalogo");

let nuevoProducto = document.getElementById(`nuevo_producto`);
let divLoading = document.getElementById(`loading`);

let buscadorInput = document.getElementById(`buscador_input`);
let buscadorBtn = document.getElementById(`buscador_btn`);
let productosBuscados = document.getElementById(`productos_buscados`);


// Botones y eventos
// Boton mostrar productos y evento correspondiente 
buscadorBtn.addEventListener("click", () => {
    console.log(buscadorInput.value.toLowerCase());
    let marcaBuscada = paletero.filter(item => item.marca.toLowerCase() == buscadorInput.value.toLowerCase());
    if(marcaBuscada.length == 0) {
        Swal.fire({
            title: 'Error!',
            text: 'No se encontraron coincidencias',
            icon: 'error',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1500
        });
        mostrarCatalogo(paletero);
    }else {
        Swal.fire({
            title: 'Espere un momento!',
            text: 'Estamos cargando los resultados',
            icon: 'success',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 2000
        });
        setTimeout(() => {
            mostrarCatalogo(marcaBuscada);
        }, 2000);
    }
});

let btnMostrarProductos = document.getElementById(`mostrar_productos`);
btnMostrarProductos.addEventListener("click", () => {
    sectionCatalogo.innerHTML = "";
    nuevoProducto.innerHTML = ``;
    divLoading.setAttribute(`style`, `display: block;`);
    divLoading.innerHTML = `<div class="d-flex justify-content-center align-items-center">
                                <strong>Cargando el catalogo de productos...</strong>
                                <div class="spinner-border m-5 text-info" style="width: 3rem; height: 3rem;" role="status">
                                </div>
                            </div>`;
    setTimeout(() => {
        // Se borra el divLoading para darle lugar al catálogo
        divLoading.setAttribute(`style`, `display:none;`);
        // Se muestra el catalogo de productos.
        mostrarCatalogo(paletero)
    }, 2000);
});

// Boton ocultar productos y su evento correspondiente
let btnOcultarProductos = document.getElementById(`ocultar_productos`);
btnOcultarProductos.addEventListener('click', ocultarCatalogo);

// Boton crear producto y su evento correspondiente 
let btnCrearProducto = document.getElementById(`crear_producto`);
btnCrearProducto.addEventListener('click', crearProducto);

// Evento para Boton Carrito.
botonCarrito.addEventListener('click', () => {
    mostrarProductosCarrito(carritoCompras);
})

// Evento para finalizar compra
pagarModal.addEventListener('click', finalizarCompra);

let loading = setTimeout(() => {
    // Se borra el divLoading para darle lugar al catálogo
    divLoading.setAttribute(`style`, `display:none;`);
    // Se muestra el catalogo de productos.
    mostrarCatalogo(paletero)
}, 2000);
