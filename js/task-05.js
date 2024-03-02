const selectors = {
  input: document.querySelector("#name-input"),
  title: document.querySelector("#name-output"),
};

selectors.input.addEventListener("input", textInput);

function textInput(event) {
  !selectors.input.value
    ? (selectors.title.textContent = "Anonymous")
    : (selectors.title.textContent = `${selectors.input.value}`);
}
