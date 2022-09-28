var valor = function () {
    //MATH RANDOM SORTEIA NUMEROS ENTRE 0 E 1.
    //O MATH FLOOR GERA SOMENTE INTEIROS
    // COM O RANGE DE 60 (0 Á 59) COM ISSO, ADICIONA +1.
    return Math.floor((Math.random() * 60) + 1);
};
function sortear() {
    var numeros = [];
    var x;
    for (var i = 0; i < 6; i++) {
        x = valor();
        // FUNÇÃO PARA PROCURAR UM NUMERO DENTRO DO ARRAY, CASO NÃO ENCONTRE, RETORNA -1.
        if (numeros.indexOf(x) == -1) {
            numeros.push(x);
        }
        else {
            i--;
        }
    }
    numeros.sort(function (n1, n2) { return n1 - n2; });
    return numeros;
}
