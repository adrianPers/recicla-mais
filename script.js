const btnsMenu = [...document.querySelectorAll('#menu > .material-symbols-outlined')]
const section01 = document.getElementById('box-notis')

btnsMenu.map((el, indice) => {
    el.addEventListener('click', ()=>{
        btnsMenu.map(el => el.classList.remove('btn-acionado'))
        el.classList.add('btn-acionado')
        section01.style.marginLeft = `${-20 * indice}%`
    })
})