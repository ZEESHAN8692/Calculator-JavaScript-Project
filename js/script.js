const input = document.querySelector(".input");
const buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.innerHTML === "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML === "C") {
      input.value = "";
      string = "";
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
