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

const mathOperation = () => {
  if (firstNumber !== '' && symbol !== undefined && secondNumber !== '') {
    const operation = maxLength(eval(firstNumber + symbol + secondNumber));
    firstNumber = operation;
    return result.innerText = operation;
  } else {
    return result.innerText = '0';
  }
};

const maxLength = (number) => {
  return number.slice(0, 8);
}

remove.addEventListener("click", () => {
  if (symbol === undefined) {
    firstNumber = firstNumber.slice(0, -1);
    result.innerText = firstNumber;
  } else {
    secondNumber = secondNumber.slice(0, -1);
    result.innerText = secondNumber;
  }
});

numbers.forEach((number) => number.addEventListener('click', () => {
  const valueNumber = number.innerText;

  if (symbol === undefined) {
    firstNumber += valueNumber;
    result.innerText = maxLength(firstNumber);
  } else {
    secondNumber += valueNumber;
    result.innerText = maxLength(secondNumber);
  }
}));

symbols.forEach((symbolBtn) => symbolBtn.addEventListener('click', () => {
  const valueSymbol = symbolBtn.innerText;
  valueSymbol === "x" ? symbol = "*" : symbol = valueSymbol;
}));

reset.addEventListener("click", () => {
  firstNumber = '';
  symbol = undefined;
  secondNumber = '';
  result.innerText = '0';
});

equal.addEventListener("click", () => {
  mathOperation();
  firstNumber = result.innerText;
  secondNumber = '';
  symbol = undefined;
});
