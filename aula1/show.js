import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

const valorIngresso = 500;
let categoria = prompt('O valor do ingresso é 500 R$, Por favor, digite sua categoria: ')
switch(categoria){
    case 'geral':
        valorCobrado = 500
        break;
    case 'convidado':
        valorCobrado = 500 * 0.25
        break;
    case 'idoso':
        valorCobrado = 500 * 0.50
        break;
    case 'funcionario':
        valorCobrado = 500 * 0.50
        break;
    case 'funcionario idoso':
        valorCobrado = 250 * 0.50
        break;
    case 'crianca':
        valorCobrado = 0
        break; 

    

    
}


