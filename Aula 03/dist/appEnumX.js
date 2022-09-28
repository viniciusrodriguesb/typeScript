var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 12] = "Verde";
    Cor[Cor["Amarelo"] = 30] = "Amarelo";
    Cor[Cor["Vermelho"] = 5] = "Vermelho";
})(Cor || (Cor = {}));
var qualCor;
qualCor = Cor[12];
console.log('A cor escolhida foi ' + qualCor);
