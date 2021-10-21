//14:

var palavra = prompt("Insira uma palavra");

var array = palavra.split("");
var inverso = array.reverse();
if (array === inverso){
var palindromo = true;
}

if (palindromo) {
  console.log(palavra + " é um palíndromo.");
} else {
  console.log(palavra + " não é um palíndromo.");
}


