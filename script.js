/* DECLARACION DE VARIABLES */

let botonStart = document.querySelector(".btn-start");
let botonPlantarse = document.querySelector(".btn-plantarse");
let botonRepartir = document.querySelector(".btn-repartir");
let botonReset = document.querySelector(".btn-reset");
let mostrarCartas = document.querySelector(".mostrar-carta");
let puntosJugador = document.querySelector(".puntos-jugador");
let mensajeJugador = document.querySelector(".mensaje");

/* ESCONDER START BUTTON */

botonPlantarse.style.visibility = "hidden";
botonRepartir.style.visibility = "hidden";
botonReset.style.visibility = "hidden";

function hideButton() {
  botonStart.style.visibility = "hidden";
  botonPlantarse.style.visibility = "visible";
  botonRepartir.style.visibility = "visible";
  botonReset.style.visibility = "visible";
}

const btnHide = () => hideButton();
botonStart.addEventListener("click", hideButton);

/*  BOTON PARA REPARTIR CARTA */

let pica = "♠";
let trebol = "♣";
let corazon = "♥";
let rombo = "♦";

const palosCartas = [pica, trebol, corazon, rombo];
const numCartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
botonRepartir.addEventListener("click", () => {
  const [cartaRandom, puntosCarta] = obtenerCartaAleatoria();
  arrayCartasJugador.push(cartaRandom);
  sumaPuntosJugador.push(puntosCarta);
  mostrarCartasFuncion();
    verificarPuntos();

});

function obtenerCartaAleatoria() {
  const paloAleatorio =
    palosCartas[Math.floor(Math.random() * palosCartas.length)];
  const numAleatorio = numCartas[Math.floor(Math.random() * numCartas.length)];
  const cartaRandom = numAleatorio + paloAleatorio;
  const puntosCarta = numAleatorio <= 10 ? numAleatorio : 10;
  return [cartaRandom, puntosCarta];
}

const arrayCartasJugador = [];
const sumaPuntosJugador = [];

function mostrarCartasFuncion() {
  mostrarCartas.innerText = `Cartas: ${arrayCartasJugador.join(", ")}`;
  const puntosTotales = sumaPuntosJugador.reduce((a, b) => a + b, 0);
  puntosJugador.innerText = `Puntos: ${puntosTotales}`;
}

/* RECARGAR PAGINA (RESET) */

function resetPagina() {
  location.reload();
}

const btnReset = () => resetPagina();
botonReset.addEventListener("click", resetPagina);

function verificarPuntos() {
  const puntosTotales = sumaPuntosJugador.reduce((a, b) => a + b, 0);
  if (puntosTotales > 21) {
    mensajeJugador.innerText = "¡Has perdido!";
    botonPlantarse.style.visibility = "hidden";
    botonRepartir.style.visibility = "hidden";
  }
    if (puntosTotales === 21) {
      mensajeJugador.innerText = "¡Has ganado!";
      botonPlantarse.style.visibility = "hidden";
      botonRepartir.style.visibility = "hidden";
    }
}

