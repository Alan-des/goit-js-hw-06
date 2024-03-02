const selectors = {
  form: document.querySelector(".login-form"),
};

selectors.form.addEventListener("submit", submitForm);

function submitForm(evnt) {
    
  const formDataObt = {
    email: evnt.currentTarget.elements.email.value,
    password: evnt.currentTarget.elements.password.value,
  };

  evnt.preventDefault();


  if (!formDataObt.email || !formDataObt.password) {
    alert("заполните все поля");
    return;
  }

  console.log(formDataObt);

  evnt.currentTarget.reset();
}
