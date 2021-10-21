// 2- Dada a distância A e o combustível gasto B, faça um algoritmo para calcular o consumo médio. 

var distance = 0.0;
var fuel = 0.0;
var efficiency = 0.0;

distance = parseFloat(prompt("Por favor, insira a distância percorrida (em km)."));
fuel = parseFloat(prompt("Por favor, insira a quantidade de combustível gasta (em litros)."));
efficiency = distance / fuel;
console.log("Considerando que se deslocou "+distance+" km, tendo gasto "+fuel+" litros de combustível, a eficiência deste automóvel é de "+efficiency+" quilômetros por litro de combustível");
