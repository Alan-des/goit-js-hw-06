let counterValue = 0;
const selector = {
  onButtonDE: document.querySelector('[data-action ="decrement"]'),
  onButtonIn: document.querySelector('[data-action ="increment"]'),
  spanCounter: document.querySelector("#value"),
};

function functionValue(evt) {
  const dataAction = evt.currentTarget.dataset.action;
  dataAction === "decrement" ? (counterValue -= 1) : (counterValue += 1);
  selector.spanCounter.textContent = counterValue;
}

selector.onButtonDE.addEventListener("click", functionValue);
selector.onButtonIn.addEventListener("click", functionValue);
