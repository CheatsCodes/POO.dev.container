import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

const valorSuco = 5.2;
const valorSanduiche = 12;

let resp = prompt("Quantos copos de suco você deseja? ");
let quantidadeSuco = Number(resp);
resp = prompt("Quantos sanduiches você deseja? ");
let quantidadeSanduiche = parseInt(resp);
let despesaSuco = quantidadeSuco * valorSuco;
if (quantidadeSuco > 10) {
  despesaSuco = despesaSuco * 0.8;
}
let despesaSanduiche = quantidadeSanduiche * valorSanduiche;
if (despesaSanduiche > 10) {
  despesaSanduiche = despesaSanduiche * 0.8;
}
let custoTotal = despesaSuco + despesaSanduiche;

console.log("\n");
console.log("Recibo: ");
console.log(
  `Suco: R$ ${valorSuco.toFixed(
    2
  )}, quantidade: ${quantidadeSuco}, Total: R$ ${despesaSuco.toFixed(2)}`
);
if (quantidadeSuco > 10) {
  console.log("Foi aplicado um desconto no suco ");
}
console.log(
  `Sanduiche: R$ ${valorSanduiche.toFixed(
    2
  )}, quantidade: ${quantidadeSanduiche}, Total: R$ ${despesaSanduiche.toFixed(
    2
  )}`
);
if (quantidadeSanduiche > 10) {
  console.log("Foi aplicado um desconto no sanduiche ");
}
console.log(`Custo total a pagar: R$ ${custoTotal}\n`);
