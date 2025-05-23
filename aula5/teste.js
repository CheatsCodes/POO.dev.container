import { validate } from "bycontract";

class Retangulo {
  lado1;
  lado2;

  perimetro() {
    let p = 2 * this.lado1 + 2 * this.lado2;
    return p;
  }

  area() {
    let a = this.lado1 * this.lado2;
    return a;
  }

  //muito importante essa função//
  toString() {
    let str = `Lado 1: ${this.lado1}, Lado 2: ${this.lado2}\n`;
    str += `Area: ${this.area()}, Perimetro: ${this.perimetro()} `;
    return str;
  }
}

let r1 = new Retangulo();
r1.lado1 = 10;
r1.lado2 = 20;

console.log(r1.toString());
