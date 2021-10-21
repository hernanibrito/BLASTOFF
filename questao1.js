// 1- Dada as idades I, J, K, X, Y. Faça um algoritmo para calcular a média das idades.
// Escolhi não restringir a quantidade de entradas, a fim de gerar um código que abrangesse 
// mais possibilidades dentro da proposta. Ao inserir '0', o código parte para o cálculo da média

var idades = [ ];
var aux = 0;
var media = 0.0;

aux = parseInt(prompt ("Insira idade. Para encerrar, insira 0"));
while (aux != 0) {
idades.push(aux);
aux = parseInt(prompt ("Insira idade. Para encerrar, insira 0"));
}
for (i=0; i<idades.length; i++){
aux = aux + idades[i];
}
let div = idades.length;
media = aux / div;
console.log("Foram informados "+ div + " valores");
console.log("Os valores foram: ");
for (i=0; i<div; i++){
console.log(idades[i]);
}
console.log("A média dos valores informados é " + media) ;
