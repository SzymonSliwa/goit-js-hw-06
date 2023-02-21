const textInput = document.getElementById("validation-input");

const textInputLength = Number(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", (event) => {
  const text = event.currentTarget.value;

  const length = text.length;

  if (length === textInputLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
