const inputfeild = document.querySelector(".user-input");
const form = document.querySelector("form");
const results = document.querySelector(".result");
const yourguess = document.querySelector(".guess-the-number");
const submbtn = document.querySelector(".submit");
const resbtn = document.querySelector(".reset");

// function a(){ //imediatly invoke function expression
let yourguessarray = [];

let randomnumber = Math.round(Math.random() * 100);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userinput = parseInt(inputfeild.value);
  if (userinput < randomnumber) {
    results.innerText = "too low😶";
    (yourguess.innerText = "yourgueses"), userinput;
  } else if (userinput > randomnumber) {
    results.innerText = "too high😬";
  } else {
    results.innerText = "congrats🌟🌟🌟";
    resbtn.disabled = false;
    submbtn.disabled = true;
  }

  if (yourguessarray.length === 3) {
    results.innerText = "you lost!! the Number was😶" + randomnumber;
    resbtn.disabled = false;
    submbtn.disabled = true;
  } else {
    yourguessarray.push(userinput);
    yourguess.innerText = "yourgueses!" + yourguessarray.join(",");
  }

  form.reset();
});

resbtn.addEventListener("click", () => {
  results.innerText = "";
  resbtn.disabled = true;
  submbtn.disabled = false;
  yourguess.innerText = "";
  randomnumber = Math.round(Math.random() * 100);
  yourguessarray = [];
});
