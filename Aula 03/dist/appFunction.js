var temMaisTitulos = function (titulos) {
    return titulos < 35;
};
var numero = 8;
// PASSOU A VARIAVEL ATRAVES DA TEMPLATE STRING ------ CHAMOU A FUNCTION ATRAVES DA TEMPLATE STRING E UTILIZOU EXPRESSÃO TERNÁRIA 
console.log("Ter ".concat(numero, " \u00E9 suficiente para passar o ...? ").concat(temMaisTitulos(8) ? "SIM" : "N\u00C3O"));
