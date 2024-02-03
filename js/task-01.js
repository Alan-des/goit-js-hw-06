const CategoriesEl = document.querySelector("#categories");
const itemsEl = CategoriesEl.children;
const itemArr = [...itemsEl];

console.log(`Number of categories: ${itemsEl.length}`);
console.log("");

itemArr.forEach((item) => {
  const title = item.querySelector(`h2`).textContent;
  const itemsItem = item.querySelectorAll(`li`).length;

  console.log(`Category: ${title}`);
  console.log(`Number of items: ${itemsItem}`);
  console.log("");
});
