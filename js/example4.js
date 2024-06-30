const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const trailingOutput = document.querySelector(".output.trailing");
const leadingOutput = document.querySelector(".output.leading");

let counter = {
  vanilla: 0,
  throttled: 0,
  trailing: 0,
  leading: 0,
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
// За замовчуванням встановлено trailing
document.addEventListener(
  "scroll",
  _.debounce(
    (e) => {
      counter.trailing += 1;
      trailingOutput.textContent = counter.trailing;
    },
    300,
    // ВІдбувається відпрацювання події після завершення івенту
    { trailing: true, leading: false }
  )
);

document.addEventListener(
  "scroll",
  _.debounce(
    (e) => {
      counter.leading += 1;
      leadingOutput.textContent = counter.leading;
    },
    300,
    // Вдбувається відпрацювання події з самого початку події
    { trailing: false, leading: true }
  )
);
