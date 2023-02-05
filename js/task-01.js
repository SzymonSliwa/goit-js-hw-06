const menuItemsByTagName = document.querySelectorAll("li.item");
//console.log(menuItemsByTagName);

//const menuItemsByClass = document.querySelector(".item");
//console.log(menuItemsByClass);

//ul#categories, czyli elementy li.item.

//const listWithId = document.querySelectorAll("#item");
//console.log(listWithId);

const menuh2 = document.querySelectorAll("h2");
//console.log(menuh2);

//const h2text = menuh2[1].value;
//console.log(h2text);

//console.log(menuh2[1].textContent);

const message = menuItemsByTagName.length;
const message2 = `Number of categories: ${message}`;

const body = document.body;
//console.log(body);

const p = body.firstElementChild;
const categories = p.nextElementSibling;

//console.log(categories);

const listItem = categories.firstElementChild;
//console.log(listItem);

const list = listItem.lastElementChild;
//console.log(list);

const listItem2 = listItem.nextElementSibling;
//console.log(listItem2);

const listItem3 = listItem2.nextElementSibling;

const animalList = listItem.querySelectorAll("li");
//console.log(animalList);

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
