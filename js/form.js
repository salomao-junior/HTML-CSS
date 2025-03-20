const labels = document.querySelectorAll(".form__label");
const inputs = document.querySelectorAll(".form__input");

inputs.forEach((input, index) => {
  const label = labels[index];

  input.addEventListener("focus", () => {
    label.classList.add("form__label--focus");
    input.classList.add("form__input--focus");
  });

  input.addEventListener("blur", () => {
    label.classList.remove("form__label--focus");
    input.classList.remove("form__input--focus");
  });
});
