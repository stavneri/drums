var crash = new Audio("./sounds/crash.mp3");
var kick = new Audio("./sounds/kick-bass.mp3");
var snare = new Audio("./sounds/snare.mp3");
var tom1 = new Audio("./sounds/tom-1.mp3");
var tom2 = new Audio("./sounds/tom-2.mp3");
var tom3 = new Audio("./sounds/tom-3.mp3");
var tom4 = new Audio("./sounds/tom-4.mp3");

for (var i = 0; i < document.querySelectorAll("button.drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        playSoundByKey(this.innerHTML);
        addAnimation(this.innerHTML);         
    });
}

document.addEventListener("keydown", function (event) {
    playSoundByKey(event.key);
    addAnimation(event.key);
});

function playSoundByKey (keyPreesed) {
    switch (keyPreesed) {
        case "w":
            crash.play();
            break;
        
        case "a":
            snare.play();
            break;
        
        case "s":
            tom1.play();
            break;

        case "d":
            tom2.play();
            break;

        case "j":
            kick.play();
            break;

        case 'k':
            tom3.play();
            break;

        case "l":
            tom4.play();
            break;

        default:
            break;
    }
}

function addAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");  
    }, 100);
}