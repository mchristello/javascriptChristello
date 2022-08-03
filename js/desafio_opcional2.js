// Desafio Opcional DOM 

// Nos traemos la cass desde el index.html
let listado = document.getElementsByClassName("listado_cosas")

// Creamos el elemento que queremos agregar al html
let removeItem = document.createElement("li");
removeItem.innerText = `remove()`;
removeItem.className = "items_lista";

let valueItem = document.createElement("li");
valueItem.innerText = ".value()";
valueItem.className = "items_lista";

// Ya que nos trajimos el elemento con ClassName, tenemos que iterar sobre el contenido para poder agregar items
for(let item of listado) {
    console.log(item.innerText);
    item.appendChild(removeItem);
    item.appendChild(valueItem);
}

// Agregamos texto a un item de la lista
let items = document.getElementsByClassName (`items_lista`);
items[0].innerText += ` - Document Object Model`;
for(let item of items){
    console.log(item.innerText);
}

// Eliminamos uno de los items

items[3].remove();
for(let item of items){
    console.log(item.innerText);
}