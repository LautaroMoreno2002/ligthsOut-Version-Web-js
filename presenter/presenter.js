"use strict";
class Presenter {
  constructor() {
    this.lightsOut = new LightOut();
    this.lightsOut.crearTablero(7);
  }
  tamanioTablero(){
    return this.lightsOut.largoDelTablero();
  }
  estaEncendido(fila, columna){
    return this.lightsOut.verEstadoDeCelda(fila, columna);
  }
  cambiarEstado(fila, columna){
    this.lightsOut.cambiarEstadoDeCelda(fila, columna);
  }
}
