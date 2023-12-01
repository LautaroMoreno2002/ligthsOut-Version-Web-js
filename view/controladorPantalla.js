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
      asignarEventos(boton, fila, columna)
      contenedorInterfaz.appendChild(boton);
    }
  }
}
const asignarEstado = (boton, estado) => {
  if (estado) 
    boton.classList.add('encendido');
  else 
    boton.classList.add('apagado');
}
const asignarEventos = (boton, fila, columna) => {
  boton.addEventListener('click', () => {
   if (presenter.estaEncendido(fila, columna)){
     presenter.cambiarEstado(fila, columna);
     boton.classList.add('apagado');
     boton.classList.remove('encendido');
   } else {
     presenter.cambiarEstado(fila, columna);
     boton.classList.add('encendido');
     boton.classList.remove('apagado');
   }
  })
}

dibujarTablero();