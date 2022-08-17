const cuadros = document.querySelectorAll('.cuadro');
const topo = document.querySelector('.topo');
const puntuacion = document.querySelector('#puntuacion');
const tiempoRes = document.querySelector('#time')

let resul = 0;
let hitPosition;
let tiempo = 60;
let timer = null;

function Random (){

    //LIMPIA LOS CUADROS DONDE APARECE EL TOPO
    cuadros.forEach(cuadro =>{
        cuadro.classList.remove('topo');
    });

    //COLOCA AL TOPO EN UN CUADRO ALEATORIO
    let cdrRandom = cuadros[Math.floor(Math.random(0, 1)*9)]
    cdrRandom.classList.add('topo');

    //POSICION DEL TOPO 
    hitPosition = cdrRandom.id;
}
/*
cuadros.forEach(cuadro =>{
    cuadro.addEventListener('click', () =>{
        if (cuadro.id == hitPosition){
            resul++;
            puntuacion.textContent = resul;
            hitPosition = null;
        }
    });
})

function movTopo(){
    timer = setInterval(Random, 850);
}

function count(){
    tiempo--;
    time.textContent = tiempo;

    if (tiempo == 0){
        clearInterval(timer);
        clearInterval(countTimer);
        alert ("SE TERMINÓ EL TIEMPO \n TU PUNTUACIÓN ES: " + resul);
    }
}

let countTimer;

function iniciar(){
    countTimer = setInterval(count, 1000);
    movTopo();
    document.getElementById('bttnIniciar').style.display = "none";
}
*/