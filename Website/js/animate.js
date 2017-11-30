const knop = document.getElementById('button');
let vlak = document.querySelectorAll('.block');

const schuif =  () => {
    vlak[0].classList.toggle('block--slide-out');
    setTimeout(function(){
        vlak[1].classList.toggle('block--slide-out');
    }, 100);
    setTimeout(function(){
        vlak[2].classList.toggle('block--slide-out');
    }, 200);
}

knop.addEventListener('click', schuif);