const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

for (let ingredient of ingredients) {
  let el = document.createElement("li");
  el.textContent = ingredient;

  el.classList.add("item");
  list.append(el);
}
