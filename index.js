const mainElement = document.querySelector("main");
const sounds = {
  j: new Audio("sounds/powerup.wav"),
  k: new Audio("sounds/1-up.wav"),
  l: new Audio("sounds/coin.wav"),
  f: new Audio("sounds/yoshi_1.mp3"),
  d: new Audio("sounds/boo-mario-64.mp3"),
};

mainElement.addEventListener("click", function (event) {
  const button = event.target.closest("button");
  if (!button) return;

  const key = button.id.replace("-key", "").toLowerCase();
  const sound = sounds[key];
  if (sound && button) {
    sound.play();
    button.classList.add("key");
    setTimeout(() => {
      button.classList.remove("key");
    }, 1000);
  }
});

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  const sound = sounds[key];
  const button = document.getElementById(`${key}-key`);
  if (sound && button) {
    event.preventDefault();
    sound.play();
    button.classList.add("key");
    setTimeout(() => {
      button.classList.remove("key");
    }, 1000);
  }
});
//js
