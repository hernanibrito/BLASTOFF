//8.
var num = prompt("Por favor, insira um número:");


switch (num){

case (!(Number.isInteger(num))):
	console.log("Não é um número inteiro.");
	var primo = false;
	break;
case 0:
	primo = false;
	break;
case 1:
primo = false;
	break;
case 2:
	primo = true;
	break;
default:
	for (x = 2; x<num; x++){
		if (num%x === 0){
		primo = false;
		} else {
		primo = true;
}
break;

}
if (primo){
console.log(num+" é um número primo.");
}
else {
console.log(num+" não é um número primo.");
}
}
