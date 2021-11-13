const display = document.querySelector("#display");
const fetchBtn = document.querySelector("#fetch-btn");

function fetchApi() {
  let url = "https://randomsuser.me/api/";

  fetch(url)
    .then((res) => res.json())
    .catch((err) => (display.innerText = err.name));
}

fetchBtn.addEventListener("click", fetchApi);
