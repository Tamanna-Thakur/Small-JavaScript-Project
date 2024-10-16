const input = document.querySelector("input");
const uppercaseOutput = document.querySelector("#Upper-Case span");
const lowercaseOutput = document.querySelector("#lower-case span");
const CamelcaseOutput = document.querySelector("#Camel-Case span");
const PascalcaseOutput = document.querySelector("#Pascal-Case span");
const snakcaseOutput = document.querySelector("#Snake-Case span");
const KebabCaseOutput = document.querySelector("#Kebab-Case span");
const TrimCaseOutput = document.querySelector("#Trim span");

function capitalization(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1, str.length);
}

function toCamelCase(string) {
  const lowercaseString = string.toLowerCase();
  const wordsArray = lowercaseString.split(" ");
  const finalArray = wordsArray.map((word, i) => {
    if (i == 0) return word;
    return capitalization(word);
  });
  return finalArray.join("");
}

//topasacalcase

function toPasecalCase(str) {
  const lowercaseStrings = str.toLowerCase();
  const wordsArrays = lowercaseStrings.split(" ");
  const finalArrays = wordsArrays.map((words) => {
    return capitalization(words);
  });
  return finalArrays.join("");
}

//snakcase

function toSnakeCase(str) {
  return str.replaceAll(" ", "_");
}

//kababcase

function tokababcase(str) {
  return str.replaceAll(" ", "-");
}

//trim

function totrim(str) {
  return str.replaceAll(" ", "");
}

function updatescreen() {
  lowercaseOutput.innerText = input.value.trim().toLowerCase();
  uppercaseOutput.innerText = input.value.trim().toUpperCase();
  CamelcaseOutput.innerText = toCamelCase(input.value.trim());
  PascalcaseOutput.innerText = toPasecalCase(input.value.trim());
  snakcaseOutput.innerText = toSnakeCase(input.value.trim());
  KebabCaseOutput.innerText = tokababcase(input.value.trim());
  TrimCaseOutput.innerText = totrim(input.value.trim());
}
updatescreen();

input.addEventListener("input", updatescreen);
