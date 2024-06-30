const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const debounceOutput = document.querySelector(".output.debounced");

let counter = {
  vanilla: 0,
  throttled: 0,
  debounce: 0,
};

// window.location.href = "https://www.google.com/";

document.addEventListener("scroll", () => {
  counter.vanilla += 1;
  vanillaOutput.textContent = counter.vanilla;
});

// console.log(window);
// _ = lodash
document.addEventListener(
  "scroll",
  _.throttle(() => {
    counter.throttled += 1;
    throttledOutput.textContent = counter.throttled;
  }, 300)
);

document.addEventListener(
  "scroll",
  _.debounce((e) => {
    counter.debounce += 1;
    debounceOutput.textContent = counter.debounce;
  }, 300)
);
