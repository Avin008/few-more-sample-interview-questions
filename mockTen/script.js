const guessNumber = document.querySelector("#guess-number");
const checkBtn = document.querySelector("#guess-btn");
const display = document.querySelector("#display");

checkBtn.addEventListener("click", guess);

function guess() {
  let rand = Math.floor(Math.random() * 10) + 1;
  if (Number(guessNumber.value) === rand) {
    display.innerText = `Hurray!! you won your guess: ${guessNumber.value} Lucky No. is: ${rand}`;
  } else {
    display.innerText = `Ohoo you lost your Guess: ${guessNumber.value} Lucky No. is: ${rand}`;
  }
}
