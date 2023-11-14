let hamburguer = document.querySelector('.hamburguer')
let nav = document.querySelector('.menu')

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active')
    nav.classList.toggle('active')
})