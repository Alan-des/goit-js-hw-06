let counterValue = 0;
const selector = {
  onButtonDE: document.querySelector('[data-action ="decrement"]'),
  onButtonIn: document.querySelector('[data-action ="increment"]'),
  spanCounter: document.querySelector("#value"),
};

function decrementValue() {
  counterValue -= 1;
  selector.spanCounter.textContent = counterValue;
}

function incrementValue() {
  counterValue += 1;
  selector.spanCounter.textContent = counterValue;
}

selector.onButtonDE.addEventListener("click", decrementValue);
selector.onButtonIn.addEventListener("click", incrementValue);
