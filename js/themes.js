const themeButton = document.getElementById("change-theme");

const body = document.querySelector(".body");
const resultSection = document.querySelector(".main-container__result-section");
const keys = document.querySelector(".main-container__keys")
const numbersKeysContainer = document.querySelectorAll(".main-container__keys__button-container");
const numbersKeys = document.querySelectorAll(".main-container__keys__button-container__normal-button");
const removeKeyContainer = document.getElementById("remove-container");
const removeKey = document.getElementById("remove-button");
const resetKeyContainer = document.querySelector(".main-container__keys__button-container-reset");
const resetKey = document.getElementById("reset-button");
const equalKeyContainer = document.querySelector(".main-container__keys__button-container-equal");
const equalKey = document.getElementById("equal-button");

body.classList.add("body-1");
resultSection.classList.add("result-1");
keys.classList.add("keys-1");

numbersKeysContainer.forEach(keyContainer => keyContainer.classList.add("theme-1"));
numbersKeys.forEach(number => number.classList.add("button-normal-theme-1"))

removeKeyContainer.classList.add("theme-delete-1");
removeKey.classList.add("delete-1");

resetKeyContainer.classList.add("theme-reset-1");
resetKey.classList.add("reset-1");

equalKeyContainer.classList.add("theme-equal-1");
equalKey.classList.add("equal-1");

const removeClasses = () => {
  body.classList.remove("body-1", "body-2", "body-3");
  resultSection.classList.remove("result-1", "result-2", "result-3");
  keys.classList.remove("keys-1", "keys-2", "keys-3");

  numbersKeysContainer.forEach(keyContainer => keyContainer.classList.remove("theme-1", "theme-2", "theme-3"));
  numbersKeys.forEach(number => number.classList.remove("button-normal-theme-1", "button-normal-theme-2", "button-normal-theme-3"));

  removeKeyContainer.classList.remove("theme-delete-1", "theme-delete-2", "theme-delete-3");
  removeKey.classList.remove("delete-1", "delete-2", "delete-3");

  resetKeyContainer.classList.remove("theme-reset-1", "theme-reset-2", "theme-reset-3");
  resetKey.classList.remove("reset-1", "reset-2", "reset-3");

  equalKeyContainer.classList.remove("theme-equal-1", "theme-equal-2", "theme-equal-3");
  equalKey.classList.remove("equal-1", "equal-2", "equal-3");
}

themeButton.addEventListener("input", () => {
  const themeValue = themeButton.value;

  removeClasses();

  if (themeValue === "0") {

    body.classList.add("body-1");
    resultSection.classList.add("result-1");
    keys.classList.add("keys-1");

    numbersKeysContainer.forEach(keyContainer => keyContainer.classList.add("theme-1"));
    numbersKeys.forEach(number => number.classList.add("button-normal-theme-1"));

    removeKeyContainer.classList.add("theme-delete-1");
    removeKey.classList.add("delete-1");

    resetKeyContainer.classList.add("theme-reset-1");
    resetKey.classList.add("reset-1");

    equalKeyContainer.classList.add("theme-equal-1");
    equalKey.classList.add("equal-1");

  }

  if (themeValue === "1") {
    body.classList.add("body-2");
    resultSection.classList.add("result-2");
    keys.classList.add("keys-2");

    numbersKeysContainer.forEach(keyContainer => keyContainer.classList.add("theme-2"));
    numbersKeys.forEach(number => number.classList.add("button-normal-theme-2"));

    removeKeyContainer.classList.add("theme-delete-2");
    removeKey.classList.add("delete-2");

    resetKeyContainer.classList.add("theme-reset-2");
    resetKey.classList.add("reset-2");

    equalKeyContainer.classList.add("theme-equal-2");
    equalKey.classList.add("equal-2");
  }

  if (themeValue === "2") {
    body.classList.add("body-3");
    resultSection.classList.add("result-3");
    keys.classList.add("keys-3");

    numbersKeysContainer.forEach(keyContainer => keyContainer.classList.add("theme-3"));
    numbersKeys.forEach(number => number.classList.add("button-normal-theme-3"));

    removeKeyContainer.classList.add("theme-delete-3");
    removeKey.classList.add("delete-3");

    resetKeyContainer.classList.add("theme-reset-3");
    resetKey.classList.add("reset-3");

    equalKeyContainer.classList.add("theme-equal-3");
    equalKey.classList.add("equal-3");
  }
})