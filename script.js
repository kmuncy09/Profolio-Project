let buttonSubmit= document.querySelector("button");
let messageInput= document.querySelector("input");
let thanks=document.querySelector(".thanks");
let oImages=document.querySelector(".O-images");

buttonSubmit.addEventListener('click', function(){
    messageInput.style.display="none";
    thanks.style.display="block";
    buttonSubmit.style.display="none";
});