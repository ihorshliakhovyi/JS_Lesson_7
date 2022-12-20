'use strict';

const categories = document.getElementById("categories");
const listItems = categories.children;

console.log(listItems);

console.log(`В списке ${listItems.length} категории`);

const result = [...listItems].map(item =>
  console.log(
    `Категория: ${item.children[0].textContent} \nКоличество элементов: ${item.children[1].children.length}`
  )
);
