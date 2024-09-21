const image = document.querySelectorAll("img");
const yourscore = document.querySelector(".you");
const compcore = document.querySelector(".comp");
const msgbtn = document.querySelector(".msg-button");
const resetbtn = document.querySelector(".reset-button");

let userscore = 0;
let compscore = 0;
//generate random number
const compgenarate = () => {
  const options = ["rock", "paper", "scissors"];
  const randomindex = Math.floor(Math.random() * 3);
  return options[randomindex];
};

// game reset

const reset = () => {
  userscore = 0;
  compscore = 0;
  compcore.innerText = "0";
  yourscore.innerText = "0";
};

//create score to add each player
const compscor = () => {
  compscore++;
  compcore.innerText = compscore;
};
const userscor = () => {
  userscore++;
  yourscore.innerText = userscore;
};

const playgame = (userchoice) => {
  // userchoice
  console.log(`'user choice'${userchoice}`);
  //computer choice
  const compchoice = compgenarate();
  console.log(`'compu choice'${compchoice}`);
  //check conditions
  if (userchoice === compchoice) {
    msgbtn.innerText = "Draw";
  } else if (userchoice == "rock") {
    if (compchoice == "paper") {
      msgbtn.innerText = "computer  wins";
      compscor();
    } else {
      msgbtn.innerText = "user wins";
      userscor();
    }
  } else if (userchoice == "paper") {
    if (compchoice == "scissors") {
      msgbtn.innerText = "computer  wins";
      compscor();
    } else {
      msgbtn.innerText = "user wins";
      userscor();
    }
  } else if (userchoice == "scissors") {
    if (compchoice == "rock") {
      msgbtn.innerText = "computer  wins";
      compscor();
    } else {
      msgbtn.innerText = "user wins";
      userscor();
    }
  }
};

image.forEach((img) => {
  img.addEventListener("click", (e) => {
    let userchoice = e.target.id;
    playgame(userchoice);
  });
});
resetbtn.addEventListener("click", reset);
