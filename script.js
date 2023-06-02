const preloader = document.querySelector('#preloader');
const navMenu = document.querySelector('.nav-menu');
const menu = document.querySelector('#menu');
let cond = false;

window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
});

menu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menu.classList.toggle('active');
});