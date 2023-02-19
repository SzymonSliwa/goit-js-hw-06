const menuItemsByTagName = document.querySelectorAll("li.item");

const menuh2 = document.querySelectorAll("h2");

const message = menuItemsByTagName.length;

const message2 = `Number of categories: ${message}`;

const body = document.body;

const p = body.firstElementChild;
const categories = p.nextElementSibling;

const listItem = categories.firstElementChild;

const list = listItem.lastElementChild;

const listItem2 = listItem.nextElementSibling;

const listItem3 = listItem2.nextElementSibling;

const animalList = listItem.querySelectorAll("li");

const productsList = listItem2.querySelectorAll("li");

const technologiesList = listItem3.querySelectorAll("li");

const list1Length = animalList.length;
const list2Length = productsList.length;
const list3Length = technologiesList.length;

console.log(message2);
console.log(`Category: ${menuh2[0].textContent}`);
console.log(`Elements: ${list1Length}`);
console.log(`Category: ${menuh2[1].textContent}`);
console.log(`Elements: ${list2Length}`);
console.log(`Category: ${menuh2[2].textContent}`);
console.log(`Elements: ${list3Length}`);
