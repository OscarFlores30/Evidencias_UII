let iconos;
let selectors = [];

generarTablero();

function cargarIconos() {
  iconos = [
    `<img src="D:/UNIVERSIDAD/TERCER CUATRIMESTRE/PROGRAMACIÓN VISUAL/MEMORAMA/img/card1.png">`,
    `<img src="D:/UNIVERSIDAD/TERCER CUATRIMESTRE/PROGRAMACIÓN VISUAL/MEMORAMA/img/card2.png">`,
    `<img src="D:/UNIVERSIDAD/TERCER CUATRIMESTRE/PROGRAMACIÓN VISUAL/MEMORAMA/img/card3.jpg">`,
    `<img src="D:/UNIVERSIDAD/TERCER CUATRIMESTRE/PROGRAMACIÓN VISUAL/MEMORAMA/img/card4.png">`,
    `<img src="D:/UNIVERSIDAD/TERCER CUATRIMESTRE/PROGRAMACIÓN VISUAL/MEMORAMA/img/card5.png">`,
    `<img src="D:/UNIVERSIDAD/TERCER CUATRIMESTRE/PROGRAMACIÓN VISUAL/MEMORAMA/img/card6.jpg">`,
    `<img src="D:/UNIVERSIDAD/TERCER CUATRIMESTRE/PROGRAMACIÓN VISUAL/MEMORAMA/img/card7.png">`,
    `<img src="D:/UNIVERSIDAD/TERCER CUATRIMESTRE/PROGRAMACIÓN VISUAL/MEMORAMA/img/card8.png">`,
    `<img src="D:/UNIVERSIDAD/TERCER CUATRIMESTRE/PROGRAMACIÓN VISUAL/MEMORAMA/img/card9.png">`,
    `<img src="D:/UNIVERSIDAD/TERCER CUATRIMESTRE/PROGRAMACIÓN VISUAL/MEMORAMA/img/card10.png">`,
    `<img src="D:/UNIVERSIDAD/TERCER CUATRIMESTRE/PROGRAMACIÓN VISUAL/MEMORAMA/img/card11.jpg">`,
    `<img src="D:/UNIVERSIDAD/TERCER CUATRIMESTRE/PROGRAMACIÓN VISUAL/MEMORAMA/img/card12.png">`,
  ];
}

function generarTablero() {
  cargarIconos();

  let tablero = document.getElementById("tablero");

  let tarjetas = [];
  let len = iconos.length * 2;
  for (let i = 0; i < len; i++) {
    tarjetas.push(`
        <div class="card-area" onclick="cardSelector(${i})">
            <div class="card" id="card${i}">
                <div class="face front" id="back${i}">
                ${iconos[0]}
                </div>
                <div class="face back"><img src="D:/UNIVERSIDAD/TERCER CUATRIMESTRE/PROGRAMACIÓN VISUAL/MEMORAMA/img/reverse.png"></div>
            </div>
        </div>
      `);
    if (i % 2 == 1) {
      iconos.splice(0, 1);
    }
  }
  tarjetas.sort(() => Math.random() - 0.5);
  tablero.innerHTML = tarjetas.join("");
}

function cardSelector(i) {
  let card = document.getElementById("card" + i);
  if (card.style.transform != "rotateY(180deg)") {
    card.style.transform = "rotateY(180deg)";
    selectors.push(i);
  }
  if (selectors.length == 2) {
    desSelectors(selectors);
    selectors = [];
  }
}

function desSelectors(selectors) {
  setTimeout(() => {
    let back1 = document.getElementById("back" + selectors[0]);
    let back2 = document.getElementById("back" + selectors[1]);

    if (back1.innerHTML != back2.innerHTML) {
      let c1 = document.getElementById("card" + selectors[0]);
      let c2 = document.getElementById("card" + selectors[1]);
      c1.style.transform = "rotateY(0deg)";
      c2.style.transform = "rotateY(0deg)";
    } else {
      back1.style.opacity = 0.1;
      back2.style.opacity = 0.1;
    }
  }, 1000);
}