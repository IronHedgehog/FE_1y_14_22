const output = document.querySelector(".output");

let counter = 0;

// window.location.href = "https://www.google.com/";

document.addEventListener("scroll", () => {
  counter = counter + 1;
  output.textContent = counter;
});
