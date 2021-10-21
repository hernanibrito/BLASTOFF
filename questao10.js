//10.
var num = prompt("Por favor, insira um número inteiro:");
var fat = num;
if (Number.isInteger(num)){
for (let i=num-1; i>0; i--){
		fat *= i;
}
console.log(num+" ! é igual a "+fat);
}
else{
	console.log(num+" não é um número inteiro");
}
