"use strict";
class LightOut {

  constructor() {
    this.recordFacil = 0;
    this.recordNormal = 0;
    this.recordDificil = 0;
    this.recordSupremo = 0;
    this.tablero = [];
    this.estadoFinalizado = false;
  }
  crearTablero(cantCeldas) {
    if (cantCeldas == 3) 
      this.tablero = [[],[],[]];
    if (cantCeldas == 4) 
      this.tablero = [[],[],[],[]];
    if (cantCeldas == 5) 
      this.tablero = [[],[],[],[],[]];
    if (cantCeldas == 7) 
      this.tablero = [[],[],[],[],[],[],[]];
    this.iniciarlizarTablero (cantCeldas);
  }
  iniciarlizarTablero (cantCeldas) {
    for (let fila = 0; fila < cantCeldas; fila++){
      for (let columna = 0; columna < cantCeldas; columna++) {
        this.tablero[fila][columna] = this.asignarEstado();
      }
    }
  }
  asignarEstado () {
    return Math.round(Math.random() + 1) === 1 ? true : false;
  }
  verEstadoDeCelda (fila, columna) {
    return this.tablero[fila][columna];
  }
  cambiarEstadoDeCelda (fila, columna) {
    if (this.tablero[fila][columna] === true) 
      this.tablero[fila][columna] = false;
    else if (this.tablero[fila][columna] === false)
      this.tablero[fila][columna] = true;
    return this.tablero[fila][columna];
  }
  largoDelTablero() {
    return this.tablero.length;
  }
}