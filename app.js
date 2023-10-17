
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    }).type('JavaScript', {delay: 200}).delete(10).type('Html5', {delay: 500}).delete(5).type('Css')
    
    .go()
})