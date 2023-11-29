"use strict";

let presenter = new Presenter();

const dibujarTablero = () => {
  let tablero = presenter.dameTablero();
  console.log(tablero);
  let contenedorInterfaz = document.querySelector('.juego-interfaz');
  contenedorInterfaz.style = `grid-template-rows: repeat(${tablero.length}, 75px); grid-template-columns: repeat(${tablero.length}, 75px);`;
  /*grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  */
  for (let fila = 0; fila < tablero.length; fila++){
    for (let columna = 0; columna < tablero.length; columna++) {
      let boton = document.createElement('button');
      boton.classList.add('boton');
      asignarEstado(boton, tablero[fila][columna]);
      contenedorInterfaz.appendChild(boton);
    }
  }
}
const asignarEstado = (boton, posicion) => {
  if (posicion) 
    boton.classList.add('encendido');
  else 
    boton.classList.add('apagado');
}

dibujarTablero();