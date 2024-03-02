const inputElem = document.querySelector("#validation-input");

inputElem.addEventListener("blur", blurInput);

function blurInput(event) {
  const inputLengthDefoult = event.currentTarget.dataset.length;
  const inputlength = event.currentTarget.value.length;
  console.log(inputlength);
  console.log(Number(inputLengthDefoult));

  event.currentTarget.classList.toggle(
    "valid",
    inputlength === Number(inputLengthDefoult)
  );
  event.currentTarget.classList.toggle(
    "invalid",
    inputlength !== Number(inputLengthDefoult)
  );
}
