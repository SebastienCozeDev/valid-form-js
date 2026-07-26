const MIN_MAX_INPUT_SELECTOR = "input[type='text'], input[type='email'], input[type='password']";
const VALID_EMAIL_SELECTOR = "input[type='email']";
const REQUIRED_SELECTOR = "input[type='text'], input[type='email'], input[type='password']";

const VALID_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldStates = new Map();

function toggleHTMLElement(element, state) {
  if (!element) return;

  element.classList.toggle("max-h-0", !state);
  element.classList.toggle("opacity-0", !state);
  element.classList.toggle("-translate-y-2", !state);
  element.classList.toggle("pointer-events-none", !state);

  element.classList.toggle("max-h-40", state);
  element.classList.toggle("opacity-100", state);
  element.classList.toggle("translate-y-0", state);
}

function checkCondition(key, infoElement, errorElement, condition, withToggle = true) {
  fieldStates.set(key, condition);
  if (withToggle) {
    toggleHTMLElement(infoElement, condition);
    toggleHTMLElement(errorElement, !condition);
  }
  updateSubmitButtonState();
}

function getChilds(element, cssClass, selector) {
  const errorChild = element.querySelector(cssClass);
  const infoChild = element.querySelector(".info");
  const inputChild = element.querySelector(selector);
  if (!inputChild) {
    throw new Error(`${cssClass} works with ${selector} only`);
  }
  return { errorChild, infoChild, inputChild };
}

function updateSubmitButtonState() {
  const submitButton = document.querySelector("button[type='submit']");
  const hasError = [...fieldStates.values()].some(isValid => !isValid);
  submitButton.disabled = hasError;
}

function initializeField(toRun, input) {
  toRun(false);
  input.addEventListener("input", toRun);
}

function setupMinCharsRule(minChars) {
  document.querySelectorAll(`label.chars-${minChars}-min`).forEach(element => {
    const { errorChild, infoChild, inputChild } = getChilds(element, `.chars-${minChars}-min`, MIN_MAX_INPUT_SELECTOR);
    initializeField(
      (withToggle = true) => checkCondition(`${inputChild.id}.chars-${minChars}-min`, infoChild, errorChild, inputChild.value.length >= minChars, withToggle),
      inputChild,
    );
  });
}

function setupMaxCharsRule(maxChars) {
  document.querySelectorAll(`label.chars-${maxChars}-max`).forEach(element => {
    const { errorChild, infoChild, inputChild } = getChilds(element, `.chars-${maxChars}-max`, MIN_MAX_INPUT_SELECTOR);
    initializeField(
      (withToggle = true) => checkCondition(`${inputChild.id}.chars-${maxChars}-max`, infoChild, errorChild, inputChild.value.length <= maxChars, withToggle),
      inputChild,
    );
  });
}

function activateNotEmpty() {
  document.querySelectorAll(`label.required`).forEach(element => {
    const { errorChild, infoChild, inputChild } = getChilds(element, ".required", REQUIRED_SELECTOR);
    initializeField(
      (withToggle = true) => checkCondition(`${inputChild.id}.required`, infoChild, errorChild, inputChild.value !== "", withToggle),
      inputChild,
    );
  });
}

function activateValidEmail() {
  document.querySelectorAll(`label.valid-email`).forEach(element => {
    const { errorChild, infoChild, inputChild } = getChilds(element, ".valid-email", VALID_EMAIL_SELECTOR);
    initializeField(
      (withToggle = true) => checkCondition(`${inputChild.id}.valid-email`, infoChild, errorChild, VALID_EMAIL_REGEX.test(inputChild.value), withToggle),
      inputChild,
    );
  });
}

class ValidForm {
  constructor({
    minCharArray = [3, 5, 7],
    maxCharArray = [8, 16, 36, 255],
    validEmailIsActive = true,
    notEmptyIsActive = true,
  } = {}) {
    if (!Array.isArray(minCharArray)) throw TypeError("minCharArray must be an instance of Array");
    if (!Array.isArray(maxCharArray)) throw TypeError("maxCharArray must be an instance of Array");
    minCharArray.forEach(setupMinCharsRule);
    maxCharArray.forEach(setupMaxCharsRule);
    if (validEmailIsActive) activateValidEmail();
    if (notEmptyIsActive) activateNotEmpty();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ValidForm({
    maxCharArray: [3, 5, 7, 8, 10, 16, 20, 30, 36, 255]
  });
});
