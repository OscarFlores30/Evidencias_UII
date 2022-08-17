let sonAleluya=document.getElementById('song1');
let sonDonde=document.getElementById('song2');
let sonRegalo=document.getElementById('song3');
let sonLove=document.getElementById('song4');
let sonDueles=document.getElementById('song5');
let sonSaber=document.getElementById('song6');

let can=0;

let btnMoneda=document.getElementById('moneda');
let cancion=document.getElementById("cancion");
let btnPlay=document.getElementById("play");
let nombre=document.getElementById("nom");
let artista=document.getElementById("art");

sonAleluya.addEventListener("click", function () {
    alert('Seleccionaste la "HALLELUJAB"');
    document.getElementById("img").src = "img/fon1.jfif";
    can = 1;
});

sonDonde.addEventListener("click", function () {
    alert('Seleccionaste la "¿DONDE ESTABAS TU?"');
    document.getElementById("img").src = "img/fon2.jfif";
    can = 2;
});

sonRegalo.addEventListener("click", function () {
    alert('Seleccionaste la de "REGALO MAS BONITO"');
    document.getElementById("img").src = "img/fon3.jfif";
    can = 3;
});

sonLove.addEventListener("click", function () {
    alert('Seleccionaste la de "DO IT FOR LOVE"');
    document.getElementById("img").src = "img/fon4.jfif";
    can = 4;
});

sonDueles.addEventListener("click", function () {
    alert('Seleccionaste la de "DUELES TAN BIEN"');
    document.getElementById("img").src = "img/fon5.jfif";
    can = 5;
});

sonSaber.addEventListener("click", function () {
    alert('Seleccionaste la de "QUISIERA SABER"');
    document.getElementById("img").src = "img/fon6.jfif";
    can = 6;
});

btnPlay.addEventListener("click", function(){
    cancion.innerHTML = '<audio src="" autoplay></audio>' ;
})

btnMoneda.addEventListener('click', function() {
    alert('Se ingresaron los creditos');
    switch (can){
        case 1:
            alert('Moneda ingresada! \nSe reproduce ALELUYA de avivamiento')
            cancion.innerHTML = '<audio src="snd/aleluya.mp3" autoplay></audio>';
            nombre.innerHTML="ALELUYA";
            artista.innerHTML="AVIVAMIENTO";
        break;
        case 2:
            alert('Moneda ingresada! \nSe reproduce ¿DONDE ESTABAS TU? de Danna Paola')
            cancion.innerHTML = '<audio src="snd/Donde.mp3" autoplay ></audio>';
            nombre.innerHTML="¿DONDE ESTABAS TU?";
            artista.innerHTML="DANNA PAOLA";
        break;
        case 3:
            alert('Moneda ingresada! \nSe reproduce MI REGALO MAS BONTIO de  la ross maria')
            cancion.innerHTML = '<audio src="snd/Regalo.mp3" autoplay></audio>';
            nombre.innerHTML="MI REGALO MAS BONITO";
            artista.innerHTML="LA ROSS MARIA";
        break;
        case 4:
            alert('Moneda ingresada! \nSe reproduce DO IT FOR LOVE de p-hola')
            cancion.innerHTML = '<audio src="snd/Love.mp3" autoplay></audio>';
            nombre.innerHTML="DO IT FOR LOVE";
            artista.innerHTML="P-HOLA";
        break;
        case 5:
            alert('Moneda ingresada! \nSe reproduce DUELES TAN BIEN de Bruses')
            cancion.innerHTML = '<audio src="snd/Dueles.mp3" autoplay></audio>';
            nombre.innerHTML="DUELES TAN BIEN";
            artista.innerHTML="BRUSES";
        break;
        case 6:
            alert('Moneda ingresada! \nSe reproduce QUISIERA SABER de carin leon')
            cancion.innerHTML = '<audio src="snd/Saber.mp3" autoplay></audio>';
            nombre.innerHTML="QUISIERA SABER";
            artista.innerHTML="CARIN LEON";
        break;
    }
})