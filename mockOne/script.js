const input = document.querySelector("#input-field");
const reverseBtn = document.querySelector("#reverse-btn");
const display = document.querySelector("#display");

reverseBtn.addEventListener("click", reverseStr);

function reverseStr() {
  let result = input.value.split("").reverse().join("");
  display.innerText = result;
}
