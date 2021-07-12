const btnSwitch = document.querySelector('#switch');
const bloque = document.querySelector('#bloque3');
const tit = document.querySelector('#titulo');
const paf = document.querySelector('#parrafo');
const body = document.querySelector('#body');
btnSwitch.addEventListener('click',e=>{
    bloque.classList.toggle('bloque3dark')
    tit.classList.toggle('titulodark')
    paf.classList.toggle('parrafodark')
    body.classList.toggle('bodydark')
    btnSwitch.classList.toggle('active')

    if(document.body.classList.contains('bodydark')){
        localStorage.setItem('dark-mode', 'true');
    } else{
      localStorage.setItem('dark-mode','false');
    }

    if(localStorage.getItem('dark-mode')=='true'){
    body.classList.add('bodydark');
    btnSwitch.classList.add('active');
    }else{
    body.classList.remove('bodydark');
    btnSwitch.classList.remove('active');
    }
})