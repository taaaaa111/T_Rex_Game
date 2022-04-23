var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList === "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },970);
}
// create a hit detection, a function that detects when character and block touch eachother 

var hitDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<20 && blockLeft>-20 && characterTop>= 100){
    block.style.animation = "none";
    block.style.display = "none";
    alert("Game over, try again !");
    }
}, 10);