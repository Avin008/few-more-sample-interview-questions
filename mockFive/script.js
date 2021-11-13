const para = document.querySelector("#para");
const plusBtn = document.querySelector("#plus-btn");
const minusBtn = document.querySelector("#minus-btn");

para.style.fontSize = "16px";

let defaultSize = parseInt(para.style.fontSize);

plusBtn.addEventListener("click", function () {
  defaultSize++;
  para.style.fontSize = `${defaultSize}px`;
  checkFontSize(defaultSize);
});

minusBtn.addEventListener("click", function () {
  defaultSize--;
  para.style.fontSize = ` ${defaultSize}px`;
  checkFontSize(defaultSize);
});

function checkFontSize(size) {
  if (size % 5 === 0) {
    para.style.color = "green";
  } else {
    para.style.color = "";
  }
}
