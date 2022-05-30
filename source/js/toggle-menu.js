/* stylelint-disable */
const toggleMenu = document.querySelector(".togle-menu");
const mainMenu = document.querySelector(".menu");


if (!mainMenu.classList.contains("menu--hide")) {
  mainMenu.classList.add("menu--scriptable");
  mainMenu.classList.add("menu--hide");
} else {
  toggleMenu.classList.add("togle-menu--hide");
}


toggleMenu.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("togle-menu")) {
    mainMenu.classList.toggle("menu--hide");
    toggleMenu.classList.toggle("togle-menu--close");
  }
})
