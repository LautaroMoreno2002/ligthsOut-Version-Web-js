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
}
