const fetchBtn = document.querySelector("#fetch-btn");
const ul = document.querySelector("#list");

fetchBtn.addEventListener("click", fetchApi);

function fetchApi() {
  let url = `https://randomuser.me/api/?results=10`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      ul.innerHTML = "";
      for (let person of data.results) {
        if (person.dob.age > 41) {
          ul.innerHTML += `<li style="color: green">${person.name.first} ${person.dob.age} - Eligible for vaccination </li> `;
        } else {
          ul.innerHTML += `<li style="color: purple">${person.name.first} ${person.dob.age} - Not Eligible for vaccination</li> `;
        }
      }
      return data;
    })
    .catch((err) => console.log(err));
}
