// set initial count
let count = 0;

// select value and button
const value = document.querySelector("#value");
const btns1 = document.querySelector(".Decrease");
const btns2 = document.querySelector(".Reset");
const btns3 = document.querySelector(".Increase");

btns1.addEventListener("click", function () {
  count = count - 1;
  value.textContent = count; // Update the displayed count
});

btns2.addEventListener("click", function () {
  count = 0;
  value.textContent = count; // Update the displayed count
});

btns3.addEventListener("click", function () {
  count = count + 1;
  value.textContent = count; // Update the displayed count
});
