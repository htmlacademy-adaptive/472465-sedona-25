const toggleMenu = document.querySelector(".togle-menu");
const mainMenu = document.querySelector(".menu");

toggleMenu.addEventListener("click", function (e) {
  e.preventDefault;
  if (e.target.classList.contains("togle-menu")) {
    mainMenu.classList.toggle("menu--hide");
    toggleMenu.classList.toggle("togle-menu--close");
  }
})
