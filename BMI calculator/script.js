const weight = document.querySelector("#input-first");
const height = document.querySelector("#input-second");
const conatiner = document.querySelector(".container");
const btn = document.querySelector("button");
const ptext = document.querySelector("p");
const userform = document.querySelector("form");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const userheight = height.value / 100;
  const userheightvalue = userheight * userheight;

  const BMI = (weight.value / userheightvalue).toFixed(2);

  if (BMI < 18.5) {
    ptext.innerText = `Your BMI Is ${BMI} (underweight)`;
  } else if (BMI > 18.5 && BMI <= 25) {
    ptext.innerText = `Your BMI Is ${BMI} (Normal)`;
  } else {
    ptext.innerText = `Your BMI Is ${BMI} (Overweight)`;
  }
  weight.value = "";
  height.value = "";
});
