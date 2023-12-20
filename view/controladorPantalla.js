"use strict";

const presenter = new Presenter();
const TAMANIO_TABLERO = presenter.tamanioTablero();
const contenedorInterfaz = document.querySelector('.juego-interfaz');

const estilizarTableroDeJuego = (contenedor) => {
  contenedor.style = `grid-template-rows: repeat(${TAMANIO_TABLERO}, 75px); grid-template-columns: repeat(${TAMANIO_TABLERO}, 75px);`;
}
const dibujarTablero = () => {
  for (let fila = 0; fila < TAMANIO_TABLERO; fila++){
    for (let columna = 0; columna < TAMANIO_TABLERO; columna++) {
      const boton = document.createElement('button');
      boton.classList.add('boton');
      asignarEstado(boton, fila, columna);
      asignarEventos(boton, fila, columna)
      contenedorInterfaz.appendChild(boton);
    }
  }
}
const asignarEstado = (boton, fila, columna) => {
  if (presenter.estaEncendido(fila, columna)) 
    boton.classList.add('encendido');
  else 
    boton.classList.add('apagado');
}
const asignarEventos = (boton, fila, columna) => {
  encenderApagarBotones(boton, fila, columna);
}
const encenderApagarBotones = (boton, fila, columna) => {
  boton.addEventListener('click', () => {
    
  });
}
const encenderApagarBoton = (boton, fila, columna) => {
    if (presenter.estaEncendido(fila, columna))
      boton.classList.replace('encendido','apagado');
    else boton.classList.replace('apagado','encendido');
    presenter.cambiarEstado(fila, columna);
}

estilizarTableroDeJuego(contenedorInterfaz);
dibujarTablero();