"use strict";

const carrusel = document.querySelector(".carrusel");
const prev = document.querySelector(".icon-prev");
const next = document.querySelector(".icon-next");

const fragmentMainIndexGaleria = document.createDocumentFragment(); 

const imgCarrusel = ["carrusel1", "carrusel2", "carrusel3"];
let currentIndex = 0;

const crearCarrusel = () => {
    imgCarrusel.forEach((img, index) => {
        const li = document.createElement("li");
        const image = document.createElement("img");
        image.src = `assets/img/${img}.jpeg`;
        image.alt = `img ${index +1}`;
        li.appendChild(image);
        if(index === 0){
            li.classList.add("active");
        }
        fragmentMainIndexGaleria.appendChild(li);
    });
    carrusel.appendChild(fragmentMainIndexGaleria);
}

function showImage(index) {
    const carruselItems = document.querySelectorAll('.carrusel li');
    carruselItems.forEach((li, i) => {
        li.classList.toggle('active', i === index);
    });
}

next.addEventListener('click', ()=>{
    currentIndex = (currentIndex + 1) % imgCarrusel.length;
    showImage(currentIndex);
});
prev.addEventListener('click', ()=> {
    currentIndex = (currentIndex - 1 + imgCarrusel.length) % imgCarrusel.length;
    showImage(currentIndex);
});

crearCarrusel();
showImage(currentIndex);




