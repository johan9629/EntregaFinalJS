const agregarAlCarrito = (producto)=> {
    const memoria = JSON.parse(localStorage.getItem("camisetas"));
    if(!memoria) {
        const nuevoProducto = traerProductoNuevoMemoria(producto)
        localStorage.setItem("camisetas",JSON.stringify([nuevoProducto]));
    } else {
        const indiceProducto = memoria.findIndex(buscarCamiseta => buscarCamiseta.id === producto.id);
        const nuevaMemoria = memoria;
        if (indiceProducto === -1) {
            nuevaMemoria.push(traerProductoNuevoMemoria(producto));
        } else {
            nuevaMemoria[indiceProducto].cantidad ++;
        }
        localStorage.setItem("camisetas",JSON.stringify(nuevaMemoria));
    }
    actualizNumeroCarrrito()
}

const restarAlCarrito = (producto) => {
    const memoria = JSON.parse(localStorage.getItem("camisetas"));
    const indiceProducto = memoria.findIndex(buscarCamiseta => buscarCamiseta.id === producto.id);
    if (memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto,1);
        localStorage.setItem("camisetas", JSON.stringify(memoria));
    } else {
        memoria[indiceProducto].cantidad--;
    } 
    localStorage.setItem("camisetas", JSON.stringify(memoria));
    actualizNumeroCarrrito()
}

const traerProductoNuevoMemoria = (producto) => {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const cuentaCarrito = document.getElementById("cuenta-carrito");
const actualizNumeroCarrrito = ()=> {
    const memoria = JSON.parse(localStorage.getItem("camisetas"));
    if (memoria && memoria.length > 0) {
        const cuenta = memoria.reduce((acum,current) => acum + current.cantidad,0)
        cuentaCarrito.textContent = cuenta
    } else {
        cuentaCarrito.textContent = 0;
    }
}

actualizNumeroCarrrito(); 