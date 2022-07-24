
// SLIDER BOUTON

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;
  const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    slidingNewsletter.classList.add("active");
  }
});

// SLIDER PRESENTATION
const slidingpresentation = document.querySelector(".transition2");
window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;
  const topElementToTopViewport = slidingpresentation.getBoundingClientRect().top;

  console.log(topElementToTopViewport);

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    slidingpresentation.classList.add("active");
  }
});

// SLIDER MAQUETTE
const slidingmaquette = document.querySelector(".template");
window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;
  const topElementToTopViewport = slidingmaquette.getBoundingClientRect().top;

  console.log(topElementToTopViewport);

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    slidingmaquette.classList.add("active");
  }
});

// SLIDER dessin
const slidindessin = document.querySelector(".dessinmoi");
window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;
  const topElementToTopViewport = slidindessin.getBoundingClientRect().top;

  console.log(topElementToTopViewport);

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    slidindessin.classList.add("active");
  }
});

