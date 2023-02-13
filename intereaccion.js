const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains("number")) {
      display.value += button.innerText;
    } else if (button.classList.contains("operator")) {
      display.value += button.innerText;
    } else if (button.id === "clear") {
      display.value = "";
    } else if (button.id === "backspace") {
      display.value = display.value.substring(0, display.value.length - 1);
    } else if (button.id === "equals") {
      display.value = eval(display.value);
   