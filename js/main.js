"use strict";

const result = document.getElementById("result-view");
const numbers = document.querySelectorAll(".numbers");
const symbols = document.querySelectorAll(".symbols");
const remove = document.getElementById("remove-button");
const reset = document.getElementById("reset-button");
const equal = document.getElementById("equal-button");

let firstNumber = '';
let symbol = undefined;
let secondNumber = '';

const mathOperation = (firstNumber, symbol, secondNumber) => {
  const operation = eval(firstNumber + symbol + secondNumber);
  result.textContent = operation;
}

numbers.forEach((number) => number.addEventListener('click', () => {
  const valueNumber = number.textContent;

  if (symbol === undefined) {
    firstNumber += valueNumber;
    // remove.addEventListener("click", () => {
    //   const newValor = firstNumber.slice(0, firstNumber.length - 1);
    //   firstNumber = newValor;
    //   result.textContent = newValor;
    // });
    result.textContent = firstNumber;
  } else {
    secondNumber += valueNumber;
    result.textContent = secondNumber;
    remove.addEventListener("click", () => {
    })
  }
}));

symbols.forEach((symbolBtn) => symbolBtn.addEventListener('click', () => {
  symbol = symbolBtn.textContent;
}));

reset.addEventListener("click", () => {
  firstNumber = '';
  symbol = undefined;
  secondNumber = '';
  result.textContent = '0';
})

equal.addEventListener("click", () => {
  mathOperation(firstNumber, symbol, secondNumber);
  firstNumber = '';
  secondNumber = '';
  symbol = undefined;
});
