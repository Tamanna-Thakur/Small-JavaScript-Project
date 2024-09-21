const boxes = document.querySelectorAll(".box");
const resbtn = document.querySelector(".reset");
const para = document.querySelector("p");
const msg = document.querySelector(".msgconatiner");
const nwbtn = document.querySelector(".new");
let turnO = true; //playerx and playerO
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame = () => {
  turnO = true;
  enabledbox();
  msg.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "x";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;
    checkpattern();
  });
});

const desabledbox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledbox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
showwinner = (winner) => {
  para.innerText = ` Congratulations Winner is ${winner}`;
  msg.classList.remove("hide");
  desabledbox();
};

const checkpattern = () => {
  for (let pattern of winpattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showwinner(pos1Val);
      }
    }
  }
};
nwbtn.addEventListener("click", resetgame);
resbtn.addEventListener("click", resetgame);
