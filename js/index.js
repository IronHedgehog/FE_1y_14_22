const firstDiv = document.querySelector(".first");
const secondDiv = document.querySelector(".second");
const thirdDiv = document.querySelector(".third");
const parrent = document.querySelector(".parrent");

firstDiv.addEventListener("click", onCLickFirst);
secondDiv.addEventListener("click", onCLickSecond);
thirdDiv.addEventListener("click", onCLickThird);

parrent.addEventListener("click", onClick);

function onCLickFirst(e) {
  console.log("Перший");
}
function onCLickSecond(e) {
  console.log("другий");
  e.stopImmediatePropagation(); // Забороняти всплиття не треба без явних причин
}
function onCLickThird(e) {
  console.log("третій");
  e.stopPropagation(); // Забороняти всплиття не треба без явних причин
}

function onClick(e) {
  console.log(e.target);
}

const arr = [1, 2, 3, 4, 5].split(" ");
