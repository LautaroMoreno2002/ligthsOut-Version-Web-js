"use strict";
class Presenter {
  constructor() {
    this.lightsOut = new LightOut();
    this.lightsOut.crearTablero(7);
  }
  dameTablero(){
    console.log(this.lightsOut.tablero);
    return this.lightsOut.tablero;
  }
  estaEncendido(fila, columna){
    return this.lightsOut.verEstadoDeCelda(fila, columna);
  }
  cambiarEstado(fila, columna){
    this.lightsOut.cambiarEstadoDeCelda(fila, columna);
  }
}
