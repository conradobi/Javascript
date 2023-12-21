// Ask user to enter a number.
// Check if that number is divisible by both 3 and 5.

const inputNum = document.getElementById("inputNum");
const btnsubmit = document.getElementById("btnsubmit");

btnsubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (parseInt(inputNum.value) % 3 == 0 && parseInt(inputNum.value) % 5 == 0) {
    console.log(parseInt(inputNum.value) + " Is Divisible");
  } else {
    console.log("Not Divisible");
  }
});
