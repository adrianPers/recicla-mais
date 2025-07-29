const btnsMenu = [...document.querySelectorAll('#menu > .material-symbols-outlined')]
const section01 = document.getElementById('box-notis')

btnsMenu.map((el, indice) => {
    el.addEventListener('click', () => {
        btnsMenu.map(el => el.classList.remove('btn-acionado'))
        el.classList.add('btn-acionado')
        section01.style.marginLeft = `${-20 * indice}%`
    })
})

const boxNoti = document.getElementById('box-notis')
let classBoxNoti = "box-noti nao-lida"

const titulosNoti = [
    'Meta batida',
    'Agendamento de Coleta',
    'Confira as novidades',
    'Análize de desempenho',
    'Lojas Parceiras'
]

const resumoNoti = [
    'Você bateu mais uma meta ... ',
    'Coleta agendada para o dia ...',
    'Você sabe o que são as ODS? ...',
    'Confira as suas atividades ...',
    'Veja onde você tem desconto ...'
]

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let indexNoti 

for (let i = 0; i <= 10; i++) {

    indexNoti = numeroAleatorio(0, 4)

    if (i > 1) {
        classBoxNoti = "box-noti"
    }

    boxNoti.innerHTML += `
    <div class="${classBoxNoti}">
        <span class="material-symbols-outlined icon-noti">
            notifications
        </span>
        <div class="box-text-noti">
            <h3>${titulosNoti[indexNoti]}</h3>
            <p>${resumoNoti[indexNoti]}</p>
            <span>${numeroAleatorio(10, 23)}:${numeroAleatorio(10, 59)}</span>
        </div>
    </div>`
}

[...boxNoti.children].map(el => {
    el.addEventListener('click', () => {
        el.classList.remove('nao-lida')
        if(
            !document.getElementsByClassName('nao-lida').length
        ){
            document.querySelectorAll('#menu span')[0].classList.remove('novo')
        }
    })
})