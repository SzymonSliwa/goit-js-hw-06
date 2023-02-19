const nameInput = document.getElementById("name-input");

const output = document.getElementById("name-output");

nameInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
  if (nameInput.value === "") {
    output.textContent = "Anonymous";
  }
});
