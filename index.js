/*NAV RESPONSIVE */

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

/*DARK MODE */

const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
})