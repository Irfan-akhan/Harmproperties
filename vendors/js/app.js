const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.main-nav');
const toggleNavbar = function () {
    navbar.classList.toggle('toggle-nav');
};
hamburger.addEventListener('click', toggleNavbar);
