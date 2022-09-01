// Declaración de FUNCIONES
function mostrarCatalogo() {
    sectionCatalogo.innerHTML = "";
    nuevoProducto.innerHTML = ``;
    paletero.forEach((item)=>{
        let nuevoItem = document.createElement(`div`);
        nuevoItem.innerHTML = `<article id="${item.id}" class="card">
                                    <h2 class="card__titulo">${item.marca}</h2>
                                    <img class="card__img" src="${item.imagen}" alt="${item.marca} ${item.modelo}">
                                    <div class="card__contenido">
                                        <p class="card__texto">${item.tipo} ${item.marca} ${item.modelo}</p>
                                        <p class="card__año">Año ${item.anio}</p>
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
    itemCreado = new Items(parseInt(paletero.length+1), tipoInput, imgInput, marcaInput, modeloInput, parseInt(anioInput), parseInt(precioInput));
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
                                        <button class="btn_agregar boton" id="eliminar${item.id}">Eliminar del Carrito</button>
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
    (cantItems === 0) ? contadorItems.innerText = `0`: contadorItems.innerText = `${cantItems.length}`;
}

function totalCompra(...totalProductos) {  // Spread para la funcion del importe total del carrito.
    acumulador = 0;
    acumulador = totalProductos.reduce((acc, item) => {
        return acc + item.precio
    }, 0);
    acumulador>0 ? contenidoModal.innerHTML = `El total de su compra es $${acumulador}` : contenidoModal.innerHTML=`<p>No hay productos en el Carrito</p>`; // Acumulador con Operador Ternario.
}

function finalizarCompra () {
    Swal.fire({
        title: `Ya casi!`,
        text: `Estas seguro de que qures finalizar esta compra?`,
        icon: `question`,
        confirmButtonText: `Ok!`,
        confirmButtonColor: `green`,
        showCancelButton: true,
        cancelButtonText: `Cancelar`,
        cancelButtonColor: `red`
    }).then((result) => {
        if(result.isConfirmed) {
            Swal.fire({
                    title: `Un paso más.`,
                    text: `Para finalizar ingrese un email para enviarte el formulario de pago. (No recibirás nada, pues es una web de preuba 😁)`,
                    input: 'email',
                    icon: `info`,
                    inputPlaceholder: 'Ingresá tu mail',
                    confirmButtonColor: `green`
                }).then((email) => {
                    if (email) {
                        Swal.fire({
                            title: `Muchas gracias!`,
                            text:`Sigue las instrucciones que han sido enviadas a tu mail.`,
                            icon: `success`
                        });
                    }
            })
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
}