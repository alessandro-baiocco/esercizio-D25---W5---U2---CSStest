const navBar = document.getElementsByTagName("nav")[0];
const button = document.querySelector(".navList ul button ");

window.addEventListener("scroll", function () {
  if (this.scrollY > 400) {
    navBar.classList.remove("toYellow");
    button.classList.remove("toBlack");
    navBar.classList.add("toWhite");
    button.classList.add("toGreen");
  } else {
    navBar.classList.remove("toWhite");
    button.classList.remove("toGreen");
    navBar.classList.add("toYellow");
    button.classList.add("toBlack");
  }
});
