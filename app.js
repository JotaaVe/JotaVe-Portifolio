
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

// Scroll do site

let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    console.log("Scroll Position: " + currentScrollPos);
  if (prevScrollPos > currentScrollPos) {
    // Rolar para cima
    document.getElementById("header").style.top = "0";
  } else {
    // Rolar para baixo
    document.getElementById("header").style.top = "-100px"; // Altura do cabeçalho
  }
  prevScrollPos = currentScrollPos;
}
