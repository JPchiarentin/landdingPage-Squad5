const carouselSlide = document.querySelector(".slider");
const carouselImg = document.querySelectorAll(".slider img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let contador = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * contador) + "px)";

prevBtn.addEventListener("click", function() {
    if (contador <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    contador--;
    carouselSlide.style.transform = "translateX(" + (-size * contador) + "px)";
});
nextBtn.addEventListener("click", function() {
    if (contador >= carouselImg.lenght -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    contador++;
    carouselSlide.style.transform = "translateX(" + (-size * contador) + "px)";
});

carouselSlide.addEventListener("transitionend", function() {
    if (carouselImg[contador].id === "lastClone") {
        carouselSlide.style.transition = "none";
        contador = carouselImg.lenght -2;
        carouselSlide.style.transform = "translateX(" + (-size * contador) + "px)";
    }
    if (carouselImg[contador].id === "firstClone") {
        carouselSlide.style.transition = "none";
        contador = carouselImg.lenght - contador;
        carouselSlide.style.transform = "translateX(" + (-size * contador) + "px)";
    }
});
