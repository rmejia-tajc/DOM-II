// Your code goes here

const yellowbus = document.querySelector(".intro img");

yellowbus.addEventListener("mouseover", function(event) {
    yellowbus.style.border="1px solid blue";
})




const home = document.querySelector("body");

home.addEventListener('keydown', function(event) {
    home.classList.toggle("goblue");
});



const midImg = document.querySelector(".content-destination img");

midImg.addEventListener('contextmenu', function(event) {
    midImg.classList.toggle("displayNone");
});


const title = document.querySelector(".logo-heading");

console.log(title);

title.addEventListener('wheel', function(event) {
    title.style.color = 'red';
    title.style.fontSize = "5rem"
  });