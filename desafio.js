//Variaveis
const precoCombustivel = 3.64;
const kmPorLitros = 10;
const distanciaKm = 100;

//Calculos
const litrosConsumidos = distanciaKm / kmPorLitros;
const gastoMedio = litrosConsumidos * precoCombustivel;

console.log('O Valor Medio Gasto foi R$', gastoMedio.toFixed(2)); //toFixed é uma condição que arredonda o numero após a virgula
