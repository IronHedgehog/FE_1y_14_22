document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = Array.from(document.querySelectorAll(".lazy-img"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          //   Якщо людина бачить ці зображення
          if (entry.isIntersecting === true) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
          }
        });
      },
      {
        // root: null,
        rootMargin: "50px",
        // threshold:,
      }
    );

    //   isIntersecting; - чи наразі людина бачить це на екрані? так або ні
    //   isVisible
    //   target -
    lazyImages.forEach((img) => {
      observer.observe(img);
    });
  } else {
    //   else відпрацює на старій версії браузера де IntersectionObserver не існує
    console.log("Ліниве завантаження не підтримується");
    lazyImages.forEach((img) => {
      img.src = img.dataset.src;
    });
  }
});
