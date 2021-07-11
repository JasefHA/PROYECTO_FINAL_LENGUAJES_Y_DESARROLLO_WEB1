const botonAceptarCookies = document.getElementById("btn-aceptar-cookies");
const avisoCookies = document.getElementById("aviso-cookies");
const fondoAvisoCookies = document.getElementById("fondo-aviso-cookies");



botonAceptarCookies.addEventListener('click',()=>{
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');
});
