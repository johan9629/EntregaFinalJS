const contenedorTarjetas = document.getElementById("productos-container")
const docfrag = document.createDocumentFragment();

crearTarjetasProductos = (productos)=> {
    productos.forEach((producto) => {
        const nuevaCamiseta = document.createElement("div");
        nuevaCamiseta.classList = "tarjeta-producto";
        nuevaCamiseta.innerHTML = `
            <img src=${producto.img}>
            <h2>${producto.nombre}</h2>
            <p>$${producto.precio}</p>
            <button>Agregar al carrito </button>
            `
        docfrag.appendChild(nuevaCamiseta);
        nuevaCamiseta.querySelector("button").addEventListener("click",()=>{agregarAlCarrito(producto) });
    })
    contenedorTarjetas.appendChild(docfrag);
}

crearTarjetasProductos(camisetas);