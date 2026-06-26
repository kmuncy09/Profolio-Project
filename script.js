let buttonSubmit= document.querySelector("button");
let messageInput= document.querySelector("input");
let thanks=document.querySelector(".thanks");
let previousButton=document.querySelector(".previous");
let nextButton=document.querySelector(".next");
let carouselTrack=document.querySelectorAll(".carousel-track");
let slides=document.querySelectorAll(".carousel-slide");

buttonSubmit.addEventListener('click', function(){
    messageInput.style.display="none";
    thanks.style.display="block";
    buttonSubmit.style.display="none";
});
let currentIndex = 0;
let totalSlides=slides.length;

function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}
nextButton.addEventListener("click", function () {
    if (currentIndex < totalSlides -1) {
        currentIndex++;
    } else {
        currentIndex=0;
    }
    updateCarousel();
});
previousButton.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex= totalSlides - 1;
    }
    updateCarousel();
});