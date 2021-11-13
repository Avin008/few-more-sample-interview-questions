const heading = document.querySelector("#name");
const getBtn = document.querySelector("#get-btn");

const names = [
  "Avinash",
  "Tushar",
  "Pratiyush",
  "Himanshu",
  "Amish",
  "Ajay",
  "Avi",
  "Rajesh",
  "Vabesh",
  "Ramesh",
];
heading.innerText = getRandom(names);

function getRandom(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

getBtn.addEventListener("click", randomName);

function randomName() {
  heading.innerText = getRandom(names);
}
