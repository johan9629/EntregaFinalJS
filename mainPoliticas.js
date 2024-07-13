"use strict";

const mainPoliticas = document.querySelector("#main-politicas section");

const peticion = fetch("politicas.txt");
const texto = peticion
    .then(res => res.text())
    .then(data => {
        const parrafoPoliticas =  document.createElement("p");
        parrafoPoliticas.textContent = data
        mainPoliticas.appendChild(parrafoPoliticas);
    });

