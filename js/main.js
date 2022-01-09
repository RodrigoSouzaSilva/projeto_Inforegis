const titulo = document.querySelector('h2')


function tipeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 90 * i)
    })
}

tipeWriter(titulo)

setInterval(() => {
    tipeWriter(titulo)
}, 10000);

// *******************************************
const target = document.querySelectorAll('.icone')
const aparece = 'aparece'


function animeScrollZap() {
    const windowTop = window.pageYOffset + ((innerHeight * 3) / 4)

    target.forEach(function(element) {
        if((windowTop > element.offsetTop)){
            element.classList.add(aparece)
        } else {
            element.classList.remove(aparece)
        }
    })
}

window.addEventListener('scroll',function() {
    animeScrollZap()
})


// ******************************************
const btnMobile = document.getElementById('btn-mobile')

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}