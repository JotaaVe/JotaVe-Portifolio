
/*Escrita automatica*/
document.addEventListener('DOMContentLoaded', () => {
  new TypeIt(".animated", {
    speed: 200,
    loop: true
  }).type('JavaScript', { delay: 200 }).delete(10).type('Html5', { delay: 500 }).delete(5).type('Css')

    .go()
})

// Scroll do site

let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
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


// menu hamburguer

const buttonHMB = document.getElementById ('menu-hmb');

function toggleMenu() {
  const nav = document.getElementById ('mobile-menu');
  nav.classList.toggle('active');
}

buttonHMB.addEventListener('click', toggleMenu);