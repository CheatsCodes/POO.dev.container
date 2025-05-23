import { validate } from "bycontract";
class Carro {
  #placa;
  #marcaModelo;
  #tamTanque;
  #combNoTanque;
  #consumo;

  constructor(placa, marcaModelo, tamTanque, consumo) {
    validate(arguments, ["string", "string", "number", "number"]);
    this.#placa = placa;
    this.#marcaModelo = marcaModelo;
    if (tamTanque < 0) {
      this.#tamTanque = 45;
    } else {
      this.#tamTanque = tamTanque;
    }
    this.#combNoTanque = 0;
    this.#consumo = consumo;
  }

  get placa() {
    return this.#placa;
  }
  get marcaModelo() {
    return this.#marcaModelo;
  }
  get tamTanque() {
    return this.#tamTanque;
  }
  get combNoTanque() {
    return this.#combNoTanque;
  }
  get consumo() {
    return this.#consumo;
  }

  combustivelNecessario(distancia) {
    validate(distancia, "Number");
    return distancia / this.consumo;
  }

  podeViajar(distancia) {
    validate(distancia, "Number");
    let cbNec = this.combustivelNecessario(distancia);
    if (cbNec <= this.combNoTanque) {
      return true;
    } else {
      return false;
    }
  }

  toString() {
    let str = `Placa: ${this.placa}, MarcaModelo: ${this.marcaModelo}\n`;
    str += `Tamanho tanque: ${this.tamTanque}, combustivel no tanque: ${this.combNoTanque}\n`;
    str += `Consumo: ${this.consumo}`;
    return str;
  }

  abastece(qtidade) {
    validate(qtidade, "number");
    if (qtidade <= 0) {
      return false;
    }
    if (this.combNoTanque + qtidade > this.#tamTanque) {
      return false;
    }
    this.#combNoTanque += qtidade;
    return true;
  }

  viaja(distancia) {
    validate(distancia, "number");
    if (this.podeViajar(distancia)) {
      this.#combNoTanque -= this.combustivelNecessario(distancia);
      return true;
    }
    return false;
  }
}

let c1 = new Carro("abc1012", "Renault/Fluence", 60, 6);
console.log(c1.toString());
c1.abastece(30);
console.log(c1.toString());
let distancia = 79;
if (c1.podeViajar(distancia) == true) {
  c1.viaja(distancia);
}
console.log(c1.toString());
