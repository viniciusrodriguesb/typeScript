var diasDaSemana = ['Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'];
var semana = function (dia) {
    if (dia === void 0) { dia = 'Domingo'; }
    return dia;
};
console.log("Hoje \u00E9 ".concat(semana(diasDaSemana[Math.floor(Math.random() * 6)])));
//O math random sorteia o INDICE DO ARRAY, o math floor localiza qual string posicionada no indice.
