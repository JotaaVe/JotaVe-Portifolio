
/*Escrita automatica*/
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    }).type('JavaScript', { delay: 200 }).delete(10).type('Html5', { delay: 500 }).delete(5).type('Css')

        .go()
})

function menu () {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}