//7.
var lista= new Array();
var pares = new Array();
var aux = prompt ("Insira número na lista. Para encerrar, insira -");
while (aux != "-") {
lista.push(parseInt(aux));
aux = prompt ("Insira número na lista. Para encerrar, insira -");
}
for (i=0; i<lista.length; i++){
if (lista[i]%2 === 0){
pares.push(lista[i])
}
}
console.log("A lista informada foi: ");
console.log(lista);
console.log("Os números pares da lista são: ");
console.log(pares);
