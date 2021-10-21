//3 - Dados três números (a, b, c), faça um algoritmo para mostrar o menor número.

var a = parseFloat(prompt(“Insira o primeiro valor”));
var b = parseFloat(prompt(“Insira o segundo valor”));
var c = parseFloat(prompt(“Insira o terceiro valor”));
var aux = a;

if (a > b || a > c){
	if (b >= c){
		aux = c;
		}
else{
	aux = b;
}
}
console.log("O menor número é "+aux);
