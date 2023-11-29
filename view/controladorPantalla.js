"use strict";

let presenter = new Presenter();

const dibujarTablero = () => {
  let tablero = presenter.dameTablero();
  console.log(tablero);
  let contenedorInterfaz = document.querySelector('.interfaz');
  contenedorInterfaz.style = `grid-template-rows: repeat(${tablero.length}, 100px); grid-template-columns: repeat(${tablero.length}, 100px);`;
  /*grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  */
  for (let fila = 0; fila < tablero.length; fila++){
    for (let columna = 0; columna < tablero.length; columna++) {
      let boton = document.createElement('button');
      boton.classList.add('boton');
      contenedorInterfaz.appendChild(boton);
    }
  }
}

dibujarTablero();