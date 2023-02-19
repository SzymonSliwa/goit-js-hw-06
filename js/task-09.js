function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const spanColor = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");
const body = document.querySelector("body");

changeBtn.addEventListener("click", handleClick);

function handleClick(event) {
  spanColor.innerHTML = getRandomHexColor();

  body.style.backgroundColor = getRandomHexColor();
}
