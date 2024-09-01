const btn = document.querySelectorAll(".button");
const defaultbtn = document.querySelector(".Default");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id == "red") {
      body.style.backgroundColor = e.target.id;
      h1.style.color = "white";
    } else if (e.target.id == "green") {
      body.style.backgroundColor = e.target.id;
      h1.style.color = "black";
    } else if (e.target.id == "darkorange") {
      body.style.backgroundColor = e.target.id;
      h1.style.color = "black";
    } else if (e.target.id == "pink") {
      body.style.backgroundColor = e.target.id;
    } else {
      body.style.backgroundColor = e.target.id;
      h1.style.color = "white";
    }
    defaultbtn.addEventListener("click", () => {
      location.reload();
    });
  });
});
