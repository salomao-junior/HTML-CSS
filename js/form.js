const labels = document.querySelectorAll(".subscribe__container__form__label");
const inputs = document.querySelectorAll(".subscribe__container__form__input");

inputs.forEach((input, index) => {
  const label = labels[index];

  input.addEventListener("focus", () => {
    label.classList.add("subscribe__container__form__label--focus");
    input.classList.add("subscribe__container__form__input--focus");
  });

  input.addEventListener("blur", () => {
    label.classList.remove("subscribe__container__form__label--focus");
    input.classList.remove("subscribe__container__form__input--focus");
  });
});
