"use strict";
exports.__esModule = true;
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(cor, fabricante, modelo) {
        this.cor = cor;
        this.fabricante = fabricante;
        this.modelo = modelo;
    }
    Veiculo.prototype.acelerar = function () {
        console.log('acelerando....');
    };
    Veiculo.prototype.parar = function () {
        console.log('parando.....');
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
