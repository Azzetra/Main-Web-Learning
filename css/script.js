const daftarIsi = document.querySelector ('.fixedBar')

document.querySelector('.tombol').onclick = ( ) => {
    daftarIsi.classList.toggle('active');
};

const button = document.querySelector('button');

document.addEventListener('click', function(e) {
    if(!button.contains(e.target) && !daftarIsi.contains(e.target)) {
        daftarIsi.classList.remove('active');
    }
})

const close = document.querySelector ('.bx bx-x bx-burst-hover bx-lg');

const iklan = document.querySelector ('.usePosition');

// const fixedBar = document.querySelector ('.fixedBar')

document.querySelector('.tombol').onclick = () => {
    iklan.classList.toggle('active');
}

document.querySelector('.closeA').onclick = () => {
    iklan.classList.toggle('active');
}

// document.querySelector('.tombol').onclick = () => {
//     fixedBar.classList.toggle('active');
// }
