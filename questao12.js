//12.

var lista = new Array();
var lista2 = new Array();
var concat = new Array();
var aux = prompt ("Insira número na lista 1. Para encerrar, insira | ");
while (aux != "|") {
lista.push(parseFloat(aux));
aux = prompt ("Insira número na lista 1. Para encerrar, insira | ");
}
var aux = prompt ("Insira número na lista 2. Para encerrar, insira * ");
while (aux != "*") {
lista2.push(parseFloat(aux));
aux = prompt ("Insira número na lista 2. Para encerrar, insira * ");
}
concat = lista.concat(lista2);
console.log("A lista 1 é "+lista);
console.log("A lista 2 é "+lista2);
console.log("A concatenação das duas listas é "+concat);
