function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divEl = document.querySelector("#controls");
const divElBeginerEnd = document.querySelector("#boxes");
const inputEl = divEl.children[0];
const buttonCreate = divEl.children[1];
const buttonDestroy = divEl.children[2];

let valueInput;

inputEl.addEventListener("input", (event) => {
  const valueInputEvent = event.currentTarget.value;
  valueInput = Number(valueInputEvent);
});

buttonCreate.addEventListener("click", () => createBoxes(valueInput));
buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  divElBeginerEnd.innerHTML = "";
}

function createBoxes(amount) {
  let size = 30;
  let boxesHtml = "";
  for (let i = 0; i < amount; i++) {
    boxesHtml += `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>`;
    size += 10;
  }

  divElBeginerEnd.insertAdjacentHTML("afterbegin", boxesHtml);
}
