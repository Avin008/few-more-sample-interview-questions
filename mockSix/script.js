const toggleBtn = document.querySelector("#toggleBtn");
const heading = document.querySelector("#heading");
const body = document.querySelector("body");

toggleBtn.addEventListener("click", toggleMode);

let flag = true;

function toggleMode() {
  checkInput();
  if (flag) {
    body.classList.add("dark_mode");
    heading.innerText = `Dark Mode On`;
    toggleBtn.innerText = "Switch to Light Mode";
    flag = false;
  } else {
    body.classList.remove("dark_mode");
    heading.innerText = "Dark Mode Off";
    toggleBtn.innerText = "Switch to Dark Mode";
    flag = true;
  }
}

function checkInput() {
  if (input.value.length > 10) {
    input.style.backgroundColor = "green";
  } else {
    input.style.backgroundColor = "";
  }
}
