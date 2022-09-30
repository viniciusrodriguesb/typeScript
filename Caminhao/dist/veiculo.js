"use strict";
exports.__esModule = true;
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(velocidade) {
        this.velocidade = velocidade;
    }
    Veiculo.prototype.acelerar = function (velocidade) {
        if (this.velocidade > velocidade) {
            console.log("Acelerando a... ".concat(velocidade, " km/h"));
        }
        else {
            console.log("Acelerando a ".concat(this.velocidade, " km/h"));
        }
    };
    Veiculo.prototype.parar = function () {
        console.log('parando.....');
    };
    Veiculo.prototype.mostrarVelocidadeMaxima = function () {
        console.log("A velocidade maxima \u00E9: ".concat(this.velocidade));
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
