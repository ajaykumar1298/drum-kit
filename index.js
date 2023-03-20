let numberOfDrum = document.querySelectorAll(".drum");

numberOfDrum.forEach((drum) => {
  drum.addEventListener("click", (e) => {
    // e.target.style.color = "white";
    makeSound(e.target.innerHTML);
    buttonAnimation(e.target.innerHTML);
  });
});

document.addEventListener("keypress", (e) => {
  //   let buttonInnerHtml = e.key;
  makeSound(e.key);
  buttonAnimation(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHtml);
      break;
  }
}

function buttonAnimation(key) {
  let activeBtn = document.querySelector(`.${key}`);
  //   console.log(activeBtn);
  //   document.querySelectorAll(`.drum`).forEach((drun) => {
  //     drun.classList.remove("pressed");
  //   });
  activeBtn.classList.add("pressed");
  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 100);
}
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
