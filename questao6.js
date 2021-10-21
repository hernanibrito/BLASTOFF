//6.
var a = prompt("Insira o horário de início. Ex: 9h30");
var b = prompt("Insira o horário de término. Ex: 10h30");
horaA = a.split("h");
horaB = b.split("h");
if(horaB[0] < horaA[0] && horaB[1] < horaA[1]){
var hora = ((horaA[0] - horaB[0] - 24)*-1)-1
var min = (horaA[1]-horaB[1]-60)*-1
}
else if(horaB[0] < horaA[0] && horaB[1] >= horaA[1]){
min = horaB[1] - horaA[1];
hora = (horaA[0] - horaB[0] - 24)*-1
}
else if(horaB[1] < horaA[1] && horaB[0] > horaA[0]){
min = (horaA[1]-horaB[1]-60)*-1
hora = horaB[0] - horaA[0] -1;
}
else {
min = horaB[1] - horaA[1];
hora = horaB[0] - horaA[0];
}
console.log("A partida durou "+hora+" horas e "+min+" minutos");
