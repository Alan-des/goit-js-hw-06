function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  bodyEl: document.body,
  buttonEl: document.querySelector(".change-color"),
  spanEl: document.querySelector(".color"),
};

elements.buttonEl.addEventListener("click", colorChange);

function colorChange(event) {
  const color = getRandomHexColor();
  elements.bodyEl.style.backgroundColor = color;
  elements.spanEl.textContent = color;
}
