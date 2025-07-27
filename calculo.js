function CalculoIMC(){

let Peso = parseFloat(document.getElementById("peso").value);
let Altura = parseFloat(document.getElementById("altura").value);

let ValorIMC = Peso / (Altura*Altura);

document.getElementById("IMC_Calculado").textContent = "Valor do IMC: " + ValorIMC.toFixed(2);

}