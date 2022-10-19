// Declaración de Clase
class Items {
    constructor(id, tipo, imagen, marca, modelo, anio, precio, stock) {
        this.id = id;
        this.tipo = tipo;
        this.imagen = imagen;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.precio = precio;
        this.stock = stock;
    };
}

let paletero = [];

// Llamando los items del archivo .json con ASYNC y AWAIT 
const importandoItems = async () => {
    let response = await fetch(`productos.json`);
    let info = await response.json();
    info.forEach((item) => {
        paletero.push(item);
    });
};

importandoItems();