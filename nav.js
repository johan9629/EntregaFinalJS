"use strict";

const header = document.querySelector("#header");

const nav = document.createElement("nav");
const ul = document.createElement("ul");
const inicioLi = document.createElement("li");
const productosLi = document.createElement("li");
const politicasLi = document.createElement("li");
const contactoLi = document.createElement("li");
const inicio = document.createElement("a");
const productos = document.createElement("a");
const politicas = document.createElement("a");
const contacto = document.createElement("a");
const carrito = document.createElement("a");
const img = document.createElement("img");
const fragmentNav = document.createDocumentFragment();

carrito.href = "./carrito.html"
carrito.innerHTML = `
    <img class="carrito" src="./assets/img/carrito.png" alt="carrito de compras">
    <span id="cuenta-carrito">0</span>
    `;

inicio.textContent = "INICIO";
inicio.href = "./index.html";
inicio.classList.add("estilos-comunes");

productos.textContent = "PRODCUTOS";
productos.href = "./productos.html";
productos.classList.add("estilos-comunes");

politicas.textContent = "POLITICAS";
politicas.href = "./politicas.html";
politicas.classList.add("estilos-comunes");

contacto.textContent = "CONTACTO";
contacto.href = "./contacto.html";
contacto.classList.add("estilos-comunes");

img.src = "./assets/img/logo.jpeg";
img.style.width = "4.7rem";
img.style.margin = ".5rem"

ul.style.display = "flex";
ul.style.width = "100%";
ul.style.justifyContent = "space-around";

nav.style.backgroundColor = "#ffffff";
nav.style.width = "100%";
nav.style.height = "3.5rem";
nav.style.display = "flex";
nav.style.alignItems = "center";

inicioLi.appendChild(inicio);
productosLi.appendChild(productos);
politicasLi.appendChild(politicas);
contactoLi.appendChild(contacto);
ul.appendChild(inicioLi);   
ul.appendChild(productosLi);
ul.appendChild(politicasLi);
ul.appendChild(contactoLi);
nav.appendChild(img)
nav.appendChild(ul);
nav.appendChild(carrito);
fragmentNav.appendChild(nav);
header.appendChild(fragmentNav);












