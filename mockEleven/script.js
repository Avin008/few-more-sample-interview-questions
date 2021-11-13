const textArea = document.querySelector("#tweet-box");
const counter = document.querySelector("#counter");
const tweetBtn = document.querySelector("#tweet-btn");

let count = Number(counter.innerText);

textArea.addEventListener("input", function () {
  counter.innerText = count - textArea.value.length;
  checkLimit(Number(counter.innerText));
});

function checkLimit(coun) {
  if (coun < 15 && coun > 1) {
    counter.style.color = "green";
  } else if (coun <= 0) {
    counter.style.color = "red";
    tweetBtn.disabled = true;
  } else {
    tweetBtn.disabled = false;
    counter.style.color = "black";
  }
}
