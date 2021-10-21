//11.
var lista = new Array();
var lista2 = new Array();
var intersec = new Array();
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
for (x = 0; x<lista.length; x++){
	for ( y = 0; y< lista2.length; y++){
		if (lista[x] === lista2[y]){
			intersec.push (parseFloat(lista2[y]));
		}
	}
}
console.log("A lista 1 é "+lista);
console.log("A lista 2 é "+lista2);
console.log("A interseção das duas listas é "+intersec);
