const inputName = document.querySelector("#name-field");
const inputColor = document.querySelector("#color-field");
const selectColors = document.querySelector("#colors");
const changeBtn = document.querySelector("#color-btn");
const display = document.querySelector("#display");

function colorName(name, color) {
  display.innerText = name;
  display.style.color = color;
}

changeBtn.addEventListener("click", function () {
  colorName(inputName.value, inputColor.value);
});

selectColors.addEventListener("change", function () {
  inputColor.value = selectColors.value;
});
