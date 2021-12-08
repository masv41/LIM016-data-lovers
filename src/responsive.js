const navBars = document.querySelector(".nav-bars");
const navMenu = document.querySelector(".nav-menu");

navBars.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navBars.setAttribute("aria-label", "Cerrar menú");
  } else {
    navBars.setAttribute("aria-label", "Abrir menú");
  }
});
