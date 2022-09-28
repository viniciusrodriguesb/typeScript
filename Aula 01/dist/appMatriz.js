var nomes = ['Matheus', 'Beatriz', 'Arian'];
var numeros = [2, 5, 6, 9];
//Selecionando um item do Array
console.log(numeros[3]);
console.log(nomes[1]);
//Listando todos os itens do array
nomes.forEach(function (x) { console.log(x); });
console.log(".");
numeros.forEach(function (y) {
    if (y == 9) {
        console.log('este valor é proibido!');
    }
    else {
        console.log('valor lido ' + y);
    }
});
