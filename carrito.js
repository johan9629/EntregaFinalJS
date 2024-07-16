const contenedorTarjetas = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const PrecioElement = document.getElementById("precio");
const docfrag = document.createDocumentFragment();
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales")
const reiniciarCarritoElement = document.getElementById("reiniciar")

crearTarjetasProductos = ()=> {
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("camisetas"));
    if (productos && productos.length > 0){
        productos.forEach((producto) => {
            const nuevaCamiseta = document.createElement("div");
            nuevaCamiseta.classList = "tarjeta-producto";
            nuevaCamiseta.innerHTML = `
                <img src=${producto.img}>
                <h2>${producto.nombre}</h2>
                <p>${producto.precio}</p>
                <div>
                    <button>-</button>
                    <span class="cantidad">${producto.cantidad}</span>
                    <button>+</button>
                </div>
                `;
            docfrag.appendChild(nuevaCamiseta);
            nuevaCamiseta
                .querySelectorAll("button")[1]
                .addEventListener("click", (e) => {
                    agregarAlCarrito(producto);
                    crearTarjetasProductos();
                    actualizarTotales();
                });

            nuevaCamiseta
                .querySelectorAll("button")[0]
                .addEventListener("click", (e) => {
                    restarAlCarrito(producto);
                    crearTarjetasProductos();
                    actualizarTotales();
                });
        })
    }
    contenedorTarjetas.appendChild(docfrag);
}

crearTarjetasProductos();
actualizarTotales();

function actualizarTotales () {
    const productos = JSON.parse(localStorage.getItem("camisetas"));
    let unidades = 0;
    let precio = 0;
    if(productos && productos.length > 0) {
        productos.forEach(productos => {
            unidades += productos.cantidad;
            precio += productos.precio * productos.cantidad;
        });
        unidadesElement.innerText = unidades;
        PrecioElement.innerText = precio;
    }
    revisarMensajeVacio();
}

function revisarMensajeVacio() {
    const productos = JSON.parse(localStorage.getItem("camisetas"));
    carritoVacioElement.classList.toggle("escondido",productos && productos.length > 0);
    totalesElement.classList.toggle("escondido",!(productos && productos.length > 0));
}

revisarMensajeVacio();

reiniciarCarritoElement.addEventListener("click", reiniciarCarrito);

function reiniciarCarrito () {
    localStorage.removeItem("camisetas");
    crearTarjetasProductos();
    revisarMensajeVacio()
}