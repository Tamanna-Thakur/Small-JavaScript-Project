const increament = document.querySelector(".plus");
const decreament = document.querySelector(".minus");
let number = document.querySelector(".number");
const inputfeild = document.querySelector("input");
const reset = document.querySelector("button");

increament.addEventListener("click", () => {
  const countnumber = parseInt(number.innerText); //to convert string into number
  // number.innerText=parseInt(number.innerText+1) // add plus 1 value
  const value = parseInt(inputfeild.value);
  number.innerText = countnumber + value;
});
decreament.addEventListener("click", () => {
  const countnumber = parseInt(number.innerText); //to convert string into number
  // number.innerText=parseInt(number.innerText-1)
  const value = parseInt(inputfeild.value); //to convert string into number
  number.innerText = countnumber - value;
});
reset.addEventListener("click", () => {
  number.innerText = 0;
  inputfeild.value = "";
});
