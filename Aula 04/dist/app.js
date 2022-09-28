"use strict";
exports.__esModule = true;
var lenovo_1 = require("./lenovo");
var computador = new lenovo_1.Lenovo();
console.log(computador.tela + " Polegadas");
computador.ligarMonitor();
computador.aumentarBrilho(30);
