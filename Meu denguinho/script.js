// EFEITO DESLIZANTE HEADER

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('rolagem', window.scrollY > 0);
});



// SIDEBAR + FUNDO ESCURO
const btnMenu = document.getElementById('abrir_menu');
const menuMobile = document.getElementById('menu_mobile');
const btnFechar = document.querySelector('.fechar_menu');
const overlay = document.getElementById('overlay');

btnMenu.addEventListener('click', () => {
    menuMobile.classList.add('abrir_menu');
    overlay.classList.add('ativo');
});

btnFechar.addEventListener('click', fecharMenu);
overlay.addEventListener('click', fecharMenu);

function fecharMenu() {
    menuMobile.classList.remove('abrir_menu');
    overlay.classList.remove('ativo');
}



// CARROSSEL
document.addEventListener('DOMContentLoaded', () => {

    const slides = document.querySelectorAll('.slide');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    if (slides.length === 0) return;

    let index = 0;

    function mostrarSlide(i) {
        slides.forEach(s => s.classList.remove('ativo'));
        slides[i].classList.add('ativo');
    }

    next.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        mostrarSlide(index);
    });

    prev.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        mostrarSlide(index);
    });

});