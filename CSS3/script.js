const menuToggle = document.querySelector('.menu');
const daftarIsi = document.querySelector('.boxDaftarIsi')

// document.querySelector('.menu').onclick = ( ) => {
//     daftarIsi.classList.toggle('slide');
// };

menuToggle.addEventListener('click', function(){
    daftarIsi.classList.toggle('slide');
});