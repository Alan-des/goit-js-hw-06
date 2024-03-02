const fontSizeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

fontSizeEl.addEventListener("input", textSizes);

function textSizes(event) {
  console.log(event.currentTarget.value);
  let fontSize = event.currentTarget.value;
  spanEl.style.fontSize = `${fontSize}px`;
}
