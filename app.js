let count = 0;

let btns = document.querySelectorAll(".btn");
let value = document.querySelector("#value");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let style = e.currentTarget.classList;
    if (style.contains("decrease")) {
      count--;
    } else if (style.contains("reset")) {
      count = 0;
    } else {
      count++;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "blue";
    }
    value.textContent = count;
  });
});
