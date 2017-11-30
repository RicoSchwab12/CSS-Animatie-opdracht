const knop = document.getElementById('knop');
let vlak = document.querySelectorAll('.vlakje');

const schuif =  () => {
    vlak[0].classList.toggle('vlakje--schuif-uit');
    setTimeout(function(){
        vlak[1].classList.toggle('vlakje--schuif-uit');
    }, 100);
    setTimeout(function(){
        vlak[2].classList.toggle('vlakje--schuif-uit');
    }, 200);
}

knop.addEventListener('click', schuif);