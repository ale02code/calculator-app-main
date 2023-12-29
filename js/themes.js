"use strict"

const themeButton = document.getElementById("change-theme");

const numbersKeys = document.querySelectorAll(".main-container__keys__button-container__normal-button");
const deleteKey = document.getElementById("remove-button");
const resetKey = document.getElementById("reset-button");
const equalKey = document.getElementById("equal-button");

themeButton.addEventListener("change", () => {
  return console.log(themeButton.value);
})