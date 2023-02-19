const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", (event) => {
  const text = event.currentTarget.value;

  const length = text.length;

  if (length >= 6) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
});
