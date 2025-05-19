import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

let valorIngresso = 500;
let valorCobrado = valorIngresso;
let categoria = prompt(
  "O valor do ingresso é 500 R$, Por favor, digite sua categoria: "
);

switch (categoria) {
  case "crianca":
    valorCobrado = 0;
    break;
  case "convidado":
    valorCobrado = valorCobrado * 0.75;
    break;
  case "funcionarioIdoso":
    valorCobrado = valorCobrado * 0.5;
    break;
  case "idoso":
  case "funcionario":
    valorCobrado = valorCobrado * 0.5;
    break;
  case "geral":
    break;
  default:
    valorCobrado = NaN;
}
if (!isNaN(valorCobrado)) {
  console.log(`Valor cobrado: R$${valorCobrado.toFixed(2)}`);
} else {
  console.log("Categoria invalida");
}
