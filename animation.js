const navBar = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", function () {
  if (this.scrollY > 400) {
    navBar.classList.add("white");
  } else {
    navBar.classList.remove("white");
  }
});
