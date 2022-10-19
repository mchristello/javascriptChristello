// Declaración de FUNCIONES
function mostrarCatalogo(array) {
    sectionCatalogo.innerHTML = "";
    nuevoProducto.innerHTML = ``;
    array.forEach((item)=>{
        let nuevoItem = document.createElement(`div`);
        nuevoItem.innerHTML = `<article id="${item.id}" class="card">
                                    <img class="card__img" src="${item.imagen}" alt="${item.marca} ${item.modelo}">
                                    <h2 class="card__titulo">${item.marca}</h2>
                                    <div class="card__contenido">
                                        <p class="card__texto"> ${item.modelo}</p>
                                        <p class="card__año">Año ${item.anio}</p>
                                        <p class="card__precio">$${item.precio}</p>
                                        <button class="btn_agregar btn btn-success" id="boton_agregar${item.id}"> Agregar<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
                                        <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></button>
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
}

function crearProducto() {
    nuevoProducto.innerHTML = ``;
    sectionCatalogo.innerHTML = "";
    let agregarProdcuto = document.createElement(`div`);
    agregarProdcuto.setAttribute(`class`, `formulario_producto`);
    agregarProdcuto.innerHTML = `<h3>Crear producto para venta</h3>
                                <form>
                                    <label for="tipo" class="labels">Tipo</label>
                                    <input type="text" id="tipo_input" class="inputs" placeholder="Pala, Bolso, Zapatilla, etc.">
                                    <label for="marca" class="labels">Marca</label>
                                    <input type="text" id="marca_input" class="inputs" placeholder="NOX, Bullpadel, Head, etc.">
                                    <label for="modelo" class="labels">Modelo</label>
                                    <input type="text" id="modelo_input" class="inputs" placeholder="Vertex, Viper, AT10, etc.">
                                    <label for="año" class="labels">Año</label>
                                    <input type="text" id="anio_input" class="inputs" placeholder="Año de fabricación.">
                                    <label for="precio" class="labels">Precio</label>
                                    <input type="text" id="precio_input" class="inputs" placeholder="En $ARS">
                                    <label for="img" class="labels">URL Imagen</label>
                                    <input type="url" id="img_input" class="inputs" placeholder="Ingresa la URL de la imágen a mostrar en el catálogo.">
                                    <label for="stock" class="labels">Stock Disponible</label>
                                    <input type="number" id="stock_input" class="inputs" placeholder="Ingrese el Stock Disponible"</input>
                                </form>
                                <button id="boton_guardar" class="boton btn_agregar"> Guardar</button>`;
    nuevoProducto.appendChild(agregarProdcuto);
    let btnGuardar = document.getElementById(`boton_guardar`);
    btnGuardar.addEventListener(`click`, guardarNuevo);
}

function guardarNuevo() {
    let tipoInput = document.getElementById(`tipo_input`).value;
    let imgInput = document.getElementById(`img_input`).value;
    let marcaInput = document.getElementById(`marca_input`).value;
    let modeloInput = document.getElementById(`modelo_input`).value;
    let anioInput = document.getElementById(`anio_input`).value;
    let precioInput = document.getElementById(`precio_input`).value;
    let stockInput = document.getElementById(`stock_input`).value;
    itemCreado = new Items(parseInt(paletero.length+1), tipoInput, imgInput, marcaInput, modeloInput, parseInt(anioInput), parseInt(precioInput), parseInt(stockInput));
    Toastify({
        text: `Agregaste ${tipoInput} ${marcaInput}`,
        duration: 2000,
        newWindow: false,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #8a2387, #e94057, #f27121)",
        }
    }).showToast();
    paletero.push(itemCreado);
    localStorage.setItem("paletero", JSON.stringify(paletero));
}

function agregarItem(item) {
    let itemAgregado = carritoCompras.find((producto) => (producto.id == item.id))
    if (itemAgregado == undefined) {
        // Se carga el item al carrito
        carritoCompras.push(item);
        // Se carga al storage para que se mantenga en el carrito si cierra la pestaña
        localStorage.setItem("carrito", JSON.stringify(carritoCompras));
        Swal.fire({
            title: 'Excelente!',
            text: `Agregaste ${item.tipo} ${item.marca} ${item.modelo}`,
            icon: 'success',
            color: `#fff`,
            background: `#054c14f0`, 
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false,
        })
    }else {
        Swal.fire ({
            title: `Oh Oh...!`,
            text: `${item.tipo} ${item.marca} ${item.modelo} ya se encuentra en el carrito.`,
            icon: `info`,
            confirmButtonText: `Ok`,
        })
    }
    itemsEnCarrito(carritoCompras)
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
                                        <button type="button" class="btn btn-danger" id="eliminar${item.id}"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                        </svg></button>
                                    </div>
                                </article>`;
    })
    totalCompra(...productosDelStorage);

    productosDelStorage.forEach(({tipo, marca, modelo, id}, index)=> { // El objeto que recbe el ForEach lo desestructuramos.
        document.getElementById(`eliminar${id}`).addEventListener(`click`, () => {
            Swal.fire({
                title: `Lo has eliminado!`,
                text: `Has eliminado ${tipo} ${marca} ${modelo} del carrito`,
                icon: `warning`,
                confirmButtonText: `OK`
            })
            let productoEliminado = document.getElementById(`${id}`)
            productoEliminado.remove();

            carritoCompras.splice(index, 1);
            localStorage.setItem(`carrito`, JSON.stringify(carritoCompras));
            mostrarProductosCarrito(carritoCompras)
        })
    })
    itemsEnCarrito(carritoCompras);
}

function itemsEnCarrito(cantItems) {
    (cantItems === 0) ? contadorItems.innerText = ``: contadorItems.innerText = `${cantItems.length}`;
}

function totalCompra(...totalProductos) {  // Spread para la funcion del importe total del carrito.
    acumulador = 0;
    acumulador = totalProductos.reduce((acc, item) => {
        return acc + item.precio
    }, 0);
    acumulador > 0 ? contenidoModal.innerHTML = `El total de su compra es <b>$${acumulador}</b>` : contenidoModal.innerHTML=`<p>No hay productos en el Carrito</p>`; // Acumulador con Operador Ternario.
}

function finalizarCompra () {
    if (carritoCompras.length > 0) {
        Swal.fire({
            title: `Ya casi!`,
            text: `Estas seguro de que qures finalizar esta compra?`,
            icon: `question`,
            confirmButtonText: `<button data-bs-toggle="modal" data-bs-target="#idModal_pago" class="btn btn-secondary">Ok!</button>`,
            confirmButtonColor: `green`,
            showCancelButton: true,
            cancelButtonText: `Cancelar`,
            cancelButtonColor: `red`
        }).then((result) => {
            if(result.isConfirmed) {
                Swal.fire({
                    title: `Aguarda un segundo más`,
                    text: `Te estamos dirigiendo a formulario de pago`,
                    icon: `info`,
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true
                })
                setTimeout(() => {
                    
                }, 2000);
                        // title: `Un paso más.`,
                        // text: `Para finalizar ingrese un email para enviarte el formulario de pago. (No recibirás nada, pues es una web de preuba 😁)`,
                        // input: 'email',
                        // icon: `info`,
                        // inputPlaceholder: 'Ingresá tu mail',
                        // confirmButtonColor: `green`
                //     }).then((email) => {
                //         if (email) {
                //             Swal.fire({
                //                 title: `Muchas gracias!`,
                //                 text:`Sigue las instrucciones que han sido enviadas a tu mail.`,
                //                 icon: `success`
                //             });
                //         }
                // })
                // carritoCompras queda vacío cuando la compra se concreta
                carritoCompras = [];
                // Se borra el carrito de localStorage para que no guarde los items
                localStorage.removeItem(`carrito`);
                //Volvemos a cargar el modal con el array vacío por lo que quedará sin nada
                mostrarProductosCarrito(carritoCompras);
            } else {
                Swal.fire({
                    title: `Cancelado`,
                    text: `La compra no fue realizada. Los productos siguen en tu carrito!!`,
                    icon: `warning`,
                    confirmButtonText: `Ok`,
                    confirmButtonColor: `green`
                })
            }
        })
    } else {
        Swal.fire({
            title: `Ups!`,
            text: `Tu carrito está vacío.`,
            icon: `info`,
            confirmButtonText: `Ok`,
            confirmButtonColor: `green`
        })
    }
}

function mercadoPago () {

}