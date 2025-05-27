import { validate } from "bycontract";

 class contaComum{
    #numero;
    #saldo;

    constructor(numero){
        validate(arguments,['number']);
        this.#numero = numero;
        this.#saldo = 0;
    }

    get numero(){
        return this.#numero;
    }

    get saldo(){
        return this.#saldo;
    }

    deposito(valor){
        validate(arguments,['number']);
        if(valor<0){
            return false;
        }else{
            this.#saldo += valor;
            return true;
        }
    }

    retirada(valor){
        validate(arguments,['number']);
        if(valor<0){
            return false;
        }
        if (this.#saldo-valor <0){
            return false;
        }
        this.#saldo = this.#saldo - valor;
        return true;

    }

    toString(){
        return `Numero: ${this.numero}, saldo: R$ ${this.saldo.toFixed(2)} `;
    }
    
}

class contaPoupanca extends contaComum{
    constructor(numero){
        super(numero);

    }


    computaJuros(taxa){
        validate(taxa,'number');
        if (taxa <0.0 || taxa > 1.0){
            return false;

        }
        let juros = this.saldo*taxa;
        this.deposito(juros);

    }

}

class contaLimite extends contaComum{
    #limite

    
    constructor(numero,limite){
        validate(arguments,['number','number']);
        super(numero);
        this.#limite = limite;
        this.deposito(limite);
        
    }

    get limite(){
        return this.#limite;
    }

    get saldo(){
        let s= super.saldo;
        s = s - this.limite;
        return s;

    }

}




    let cp = new contaPoupanca(102);
    console.log(cp.toString());
    cp.deposito(3000);
    cp.computaJuros(0.1);
    cp.retirada(100);
    console.log(cp.toString());
    console.log('----------------');
    let cl = new contaLimite(200,1000);
    console.log(cl.toString());
    cl.retirada(200);
    console.log(cl.toString());

