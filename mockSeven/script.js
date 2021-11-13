const input = document.querySelector("#input-field");
const toggleBtn = document.querySelector("#toggle-btn");

toggleBtn.addEventListener("click", togglePassword);

function togglePassword() {
  if (input.type === "password") {
    input.type = "text";
    toggleBtn.innerText = "Hide Password";
  } else {
    input.type = "password";
    toggleBtn.innerText = "Show Password";
  }
}

function checkInput() {
  if (input.value.length > 10) {
    input.style.color = "green";
  } else {
    input.style.color = "";
  }
}

input.addEventListener("input", checkInput);
