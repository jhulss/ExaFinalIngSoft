import cambiar from "./sumador"

const first = document.querySelector("#monto");
const second = document.querySelector("#efectivo");
const form = document.querySelector("#cambio-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseFloat(first.value);
  const secondNumber = Number.parseFloat(second.value);

  div.innerHTML = "<p>" + cambiarValores(firstNumber, secondNumber) + "</p>";
});
