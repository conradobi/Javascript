const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const addBtn = document.getElementById("addBtn");
const btnCheck = document.getElementById("btnCheck");
const age = document.getElementById("age");
const checkAge = document.getElementById("checkAge");

const eveninput = document.getElementById("eveninput");
const evenbtn = document.getElementById("evenbtn");

// Exercise 2
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const sum = parseInt(num1.value) + parseInt(num2.value);
  result.textContent = sum;
});
// Exercise 2
btnCheck.addEventListener("click", (e) => {
  e.preventDefault();
  if (age.value < 18) {
    checkAge.textContent = "NON-ELIGIBLE";
  } else {
    checkAge.textContent = "ELIGIBLE";
  }
});

evenbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (eveninput.value % 2 == 0) {
    console.log(eveninput.value + " is Even");
  } else {
    console.log(eveninput.value + " is Odd");
  }
});
