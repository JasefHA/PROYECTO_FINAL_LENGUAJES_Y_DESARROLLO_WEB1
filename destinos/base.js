
const bdark = document.querySelector('#palanca');
const doc = document.querySelector('#bloque3');
const tit = document.querySelector('#title');
const cab = document.querySelector('#cabeza');
const paf = document.querySelector('#parrafo')
bdark.addEventListener('click', e=>{
            doc.classList.toggle('bloque3dark')
            tit.classList.toggle('titledark')
            cab.classList.toggle('cabezadark')
            paf.classList.toggle('parrafodark')
            bdark.classList.toggle('active')

});
            