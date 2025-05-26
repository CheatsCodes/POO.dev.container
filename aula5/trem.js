import { validate } from "bycontract";

class Vagao {
  #id;
  #capCarga;

  static #idGen = 0;

  constructor(capCarga) {
    validate(arguments, ["Number"]);
    if (capCarga <= 0) {
      this.#id = -1;
      this.#capCarga = 0;
    } else {
      this.#capCarga = capCarga;
      Vagao.#idGen++;
      this.#id = Vagao.#idGen;
    }
  }
  get id() {
    return this.#id;
  }

  get capCarga() {
    return this.#capCarga;
  }

  toString() {
    let str = `[Vagao: ${this.#id}, CapCarga: ${this.#capCarga}]`;
    return str;
  }
}

class garagemDeVagoes {
  #vagoes;

  constructor() {
    this.#vagoes = [];
  }

  estaciona(vagao) {
    validate(arguments, [Vagao]);
    if (vagao.id === -1) {
      return false;
    }
    this.#vagoes.push(vagao);
    return true;
  }

  quantidade() {
    return this.#vagoes.length;
  }

  get vagoes() {
    return this.#vagoes;
  }

  retira(id) {
    validate(arguments, ["number"]);
    let v = undefined;
    if (this.quantidade() > 0) {
      for (let i = 0; i < this.quantidade(); i++) {
        if (this.#vagoes[i].id === id) {
          v = this.#vagoes.splice(i, 1)[0];
          break;
        }
      }
    }
    return v;
  }
}

// Usage example
let g = new garagemDeVagoes();
let v1 = new Vagao(1000);
g.estaciona(v1);
g.estaciona(new Vagao(2000));
g.estaciona(new Vagao(2000));
for (let v of g.vagoes) {
  console.log(v.toString());
  g.retira(2);
  console.log("-----------------------------");
  for (let v of g.vagoes) {
  console.log(v.toString());
}}