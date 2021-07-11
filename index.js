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

  // local storage
  if(document.body.classList.contains("dark")){
      localStorage.setItem("dark-mode", "true");
  } else{
    localStorage.setItem("dark-mode", "false");
  }
})

  // Obtener modo actual
  if(localStorage.getItem("dark-mode")=="true"){
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
  }else{
    document.body.classList.remove("dark");
    btnSwitch.classList.remove("active");
  }

/*COOKIES */
  const botonAceptarCookies = document.getElementById("boton-cookie");
  const avisoCookies = document.getElementById("aviso-cookies");
  const fondoAvisoCookies = document.getElementById("fondo-aviso-cookies");

  // dataLayer = [];

  // if(!localStorage.getItem("cookies-aceptadas")){
    
  // }

  avisoCookies.classList.add("activo");
    fondoAvisoCookies.classList.add("activo");

  botonAceptarCookies.addEventListener("click", () => {
    avisoCookies.classList.remove("activo");
    fondoAvisoCookies.classList.remove("activo");

    localStorage.setItem("cookies-aceptadas", true);
  })