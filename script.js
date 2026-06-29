let buttonSubmit = document.querySelector(".submit");
let messageInput = document.querySelector("input");
let thanks = document.querySelector(".thanks");
let reachOut= document.querySelector(".reach-out");

let previousButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");
const track = document.querySelector(".carousel-track");
let slides = document.querySelectorAll(".carousel-slide");

let currentIndex = 0;
let totalSlides = slides.length;

function updateCarousel() {
    if (track) {
        track.style.transform = `translateX(-${currentIndex * 100}%)`};
}
if (nextButton) {
    nextButton.addEventListener('click', function(){
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
})};
if (previousButton) {
    previousButton.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateCarousel();
})};

buttonSubmit.addEventListener("click", function(){
    let messageInputValue=messageInput.value;
    messageInput.style.display="none";
    thanks.style.display="block";
    buttonSubmit.style.display="none";
    messageInputValue = messageInputValue.replace(" ", "%20");
    window.location.href="mailto:kendall.muncy09@gmail.com? &body="+ messageInputValue;
});