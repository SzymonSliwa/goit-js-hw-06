const counter = document.getElementById("counter");

const buttonDecrement = counter.firstElementChild;

const spanValue = document.querySelector("#value");

let CounterValue = 0;

buttonDecrement.addEventListener("click", () => {
  CounterValue = CounterValue - 1;

  spanValue.innerHTML = CounterValue;
});

const buttonIncrement = counter.lastElementChild;

buttonIncrement.addEventListener("click", () => {
  CounterValue = CounterValue + 1;
  spanValue.innerHTML = CounterValue;
});
