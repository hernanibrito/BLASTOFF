//13.
var i = prompt("Insira o número de linhas da matriz");
var z = prompt("insira o número de colunas da matriz");


var matriz = [ ];
for (let a=0; a<i; a++){
	matriz.push([ ]);
	matriz[a].push(new Array(z));
	for(var b=0; b<z; b++){
					var celula = prompt();
        	matriz[a][b] = celula;
      }
}
for (a=0; a<i;a++){
	for (b=0; b<z; b++){
	document.write(matriz [a][b]);
	}document.write("<br>");
}

