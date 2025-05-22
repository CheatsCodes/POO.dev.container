function randomInt(min, max){
return Math.floor(Math.random() * (max - min + 1) + min)}

function mulNeg(lst){
    for(let i=0;i<lst.length;i++){
        if (lst[i] < 0){
            lst[i] = lst[i] * -2;
        }
    }
    return lst;
}

function menor(lst){
    let menor = lst[0];
    for(let i=1;i<lst.length;i++){
        if (menor > lst[i]){
            menor = lst[i];
        }
    }
    return menor;
}

function arranjoToString(dados){
    let str = "";
    for(let e of dados){
        str = str + '['+e+']';

    }
    return str;
}

let numeros = new Array(100);
for(let i=0;i<100;i++){
    numeros[i] = randomInt(-100,100);
}

console.log(arranjoToString(numeros));
console.log(arranjoToString(mulNeg(numeros)));
console.log(menor(numeros));


