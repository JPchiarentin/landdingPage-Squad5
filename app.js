const carouselSlide = document.querySelector(".slider");
const carouselImg = document.querySelectorAll(".slider img");
const slides = document.querySelectorAll(".slide");
const numberOfSlides = slides.length;
var slideNumber = 0;

const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

nextBtn.addEventListener("click", function(){
    slides.forEach( function (slide) {
        slide.classList.remove ("active")
        
    });
    
    slideNumber++

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    
});


