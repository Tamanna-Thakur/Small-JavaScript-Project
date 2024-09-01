const selectcheckbox1 = document.querySelector("#checkbox-1");
const bodyparent = document.querySelector("html");

const isfulldarkmode = JSON.parse(localStorage.getItem("selectcheckbox1"));

if (isfulldarkmode) {
  bodyparent.classList.add("dark");
} else {
  bodyparent.classList.remove("dark");
}

selectcheckbox1.addEventListener("click", () => {
  if (selectcheckbox1.checked == true) {
    bodyparent.classList.add("dark");
    localStorage.setItem("selectcheckbox1", true);
  } else {
    bodyparent.classList.remove("dark");
    localStorage.setItem("selectcheckbox1", false);
  }
});
