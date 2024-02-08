// Toggle class active

const navbarNav = document.querySelector ('.navbar-nav');

// ketika hamburger menu di klik
document.querySelector('.menu-toggle').onclick = ( ) => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const menuToggle = document.querySelector('.menu-toggle');


// BELUM DI PERBAIKI!!!!
// document.addEventListener('click', function(e) {
//     if(!menuToggle.contains(e.target) && !navbarNav.contains(e.target)) {
//         navbarNav.classList.remove('active');
//     }
// })