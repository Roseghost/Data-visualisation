const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navMenu.classList.remove("hide-m");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navMenu.classList.add("hide-m");
    menuOpen = false;
  }
});
