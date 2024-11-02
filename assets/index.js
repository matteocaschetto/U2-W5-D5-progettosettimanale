let hero = document.querySelector(".containerColor");
let header = document.querySelector("header");
let headerButton = document.querySelector(".Menù ul li button");
const heroBottom = hero.offsetTop + hero.offsetHeight;
const headerHeight = header.offsetHeight;
const offset = 25;
window.onscroll = function () {
  if (window.scrollY >= heroBottom - headerHeight - offset) {
    header.style.backgroundColor = "white";
    headerButton.style.backgroundColor = "#1a8917";
    header.style.transition = "All 0.5s";
    headerButton.style.transition = "All 0.5s";
  } else {
    header.style.backgroundColor = "#ffc017";
    headerButton.style.backgroundColor = "#191919";
  }
};
