const inputRange = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

let inputCurrentValue = inputRange.value;

inputRange.addEventListener("input", (event) => {
  let inputCurrentValue = inputRange.value;
  inputCurrentValue = event.target.value;

  text.style.fontSize = `${inputCurrentValue / 3.5}px`;
});
