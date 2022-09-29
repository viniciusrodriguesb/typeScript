"use strict";
exports.__esModule = true;
var caminhao_1 = require("./caminhao");
var moto_1 = require("./moto");
var teste = new caminhao_1.Caminhao('amarelo', 'mercedes', 'xxx');
var testeMoto = new moto_1.Moto('vermelha', 'kawasaki', 'ninja');
teste.acelerar();
testeMoto.empinar();
