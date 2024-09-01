const span = document.querySelector("span");
const wordlist = ["devloper", "coder", "student"];

let wordindex = 0;
let reversetype = false;
let char = 0;

const clear = setInterval(() => {
  if (!reversetype) {
    span.innerText = span.innerText + wordlist[wordindex][char];
    char++;
  } else {
    span.innerText = span.innerText.slice(0, span.innerText.length - 1);
  }

  if (char === wordlist[wordindex].length) {
    reversetype = true;
  }

  if (span.innerText.length === 0 && reversetype) {
    reversetype = false;
    char = 0;
    wordindex++;
  }
  if (wordindex === wordlist.length) {
    wordindex = 0;
  }
}, 500);
