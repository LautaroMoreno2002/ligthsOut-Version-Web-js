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
    this.dibujarTablero ();
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
    else this.tablero[fila][columna] = true;
    return this.tablero[fila][columna];
  }
  dibujarTablero () {
    let contenedorInterfaz = document.querySelector('.interfaz');
    contenedorInterfaz.style = `grid-template-rows: repeat(${this.tablero.length}, 100px); grid-template-columns: repeat(${this.tablero.length}, 100px);`;
    /*grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    */
    for (let fila = 0; fila < this.tablero.length; fila++){
      for (let columna = 0; columna < this.tablero.length; columna++) {
        let boton = document.createElement('button');
        boton.classList.add('boton');
        contenedorInterfaz.appendChild(boton);
      }
    }
  }
}

let juego = new LightOut();
juego.crearTablero(3);
console.log(juego.tablero);
console.log(juego.verEstadoDeCelda(0,4),juego.cambiarEstadoDeCelda(0,4));