// Necessita executar npm install prompt-sync
import promptsync from 'prompt-sync';
const prompt = promptsync({ sigint: true });
// -------------------------------------
// Exemplo 5: calcula digito verificador
// -------------------------------------

function acrescentaVerificar(matricula,nivelAcesso=21){
let digitos = matricula;
let soma = 0;
while (digitos.length != 1) {
    for (let i = 0; i < digitos.length; i++) {
        soma = soma + Number(digitos.at(i));
    }
    digitos = String(soma);
    soma = 0;

}
return nivelAcesso+matricula+'-'+digitos;
}

let matricula = prompt('Entre seu numero de matrícula: ');
let matrCompleta = acrescentaVerificar(matricula);
console.log(`Numero de matricula completo: ${matrCompleta}`);
