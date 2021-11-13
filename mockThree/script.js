const fetchBtn = document.querySelector("#fetch-btn");
const ul = document.querySelector("#list");

fetchBtn.addEventListener("click", fetchApi);

function fetchApi() {
  let url = "https://randomuser.me/api/?results=10";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      ul.innerHTML = "";
      console.log(data.results);
      data.results.forEach((person) => {
        if (person.gender == "female") {
          ul.innerHTML += `<li style="color: pink">${person.name.first} ${person.gender}</li>`;
        } else {
          ul.innerHTML += `<li style="color: green">${person.name.first} ${person.gender}</li>`;
        }
      });
      return data;
    })
    .catch((err) => console.log(err));
}
