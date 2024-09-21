const input = document.querySelector("input");
let previouse = "";

input.addEventListener("input", (e) => {
  const inputvalue = e.target.value;

  if (/\d+$/g.test(inputvalue)) {
    input.value = inputvalue;
  } else {
    input.value = inputvalue.substring(0, inputvalue.length - 1);
  }

  const inputfeild = input.value;
  if (inputvalue.length === 4 && previouse.length < inputvalue.length) {
    input.value = `+(${inputvalue.substring(0, 3)}) - ${
      inputvalue[inputvalue.length - 1]
    }`;
  } else if (inputvalue.length === 9 && previouse.length > inputvalue.length) {
    input.value = inputvalue.substring(2, 5);
  } else if (inputvalue.length === 4 && previouse.length > inputvalue.length) {
    input.value = `+(${inputvalue.substring(0, 3)}) - ${
      inputvalue[inputvalue.length - 1]
    }`;
  }

  previouse = inputvalue;
});
