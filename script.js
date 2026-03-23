document.addEventListener("DOMContentLoaded", function(){

const carousel = document.getElementById("carousel");
const items = document.querySelectorAll(".item");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const total = items.length;
const radius = 380;

let angle = 0;
let currentIndex = 0;


/* POSICIÓN INICIAL */

items.forEach((item, i) => {

const theta = (360 / total) * i;

item.style.transform =
`rotateY(${theta}deg) translateZ(${radius}px)`;

});


/* ACTUALIZAR CARRUSEL */

function updateCarousel(){

carousel.style.transform =
`translate(-50%, -50%) rotateY(${angle}deg)`;

items.forEach(item => item.classList.remove("active"));

items[currentIndex].classList.add("active");

}


/* NEXT */

function next(){

angle -= 360 / total;

currentIndex++;

if(currentIndex >= total){
currentIndex = 0;
}

updateCarousel();

}


/* PREVIOUS */

function prev(){

angle += 360 / total;

currentIndex--;

if(currentIndex < 0){
currentIndex = total - 1;
}

updateCarousel();

}


/* BOTONES */

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);


/* ROTACIÓN AUTOMÁTICA */

setInterval(() => {

next();

}, 2200);


/* SCROLL REVEAL */

function reveal(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach(element => {

const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

element.classList.add("active");

}

});

}

window.addEventListener("scroll", reveal);


/* INICIALIZAR */

updateCarousel();
reveal();

});

/* MENU ACTIVO */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

link.addEventListener("click", () => {

navLinks.forEach(l => l.classList.remove("active"));

link.classList.add("active");

});

});
