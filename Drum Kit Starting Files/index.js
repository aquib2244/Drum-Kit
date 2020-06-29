// button pressed part

var noOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var code = this.innerHTML;
    makeSound(code);
    buttonAnimation(code);

  });
  // var audio = new Audio("sounds/tom-1.mp3");
  // audio.play();
}

// key pressed section
document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key)
{
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var top3 = new Audio("sounds/tom-3.mp3");
      top3.play();
      break;
    case "l":
      var top4 = new Audio("sounds/tom-4.mp3");
      top4.play();
      break;
    default:
      console.log();
  }
}

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
// passing an input as a function name so that it can be called at later times
// we donot uses handleClick() instead we use handleClick so we can call only when the click event get happened
