import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });


let idades = [];        
let terminou = false;
let cont = 0;
while(!terminou){
    let idade = Number(prompt(`entre a idade do ${cont+1}o colega: `));
    if (Number(idade)== -1){
        break;
    }
    idades[cont] = idade;
    cont++;

}

let resp = prompt("De qual idade deseja verificar a frequencia: ");
let IdadeFreq = Number(resp);
let freq =  0;
let maiores = 0;
for(let i=0;i<idades.length;i++){
    if (idades[i] == IdadeFreq){
        freq++;
    }
    if (idades[i] > IdadeFreq){
        maiores++;
    }

}

console.log(`quantidade colegas com ${IdadeFreq} anos: ${freq}`);
console.log(`quantidade colegas com mais de ${IdadeFreq}: ${maiores}`);
