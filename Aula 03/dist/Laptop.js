var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Laptop = /** @class */ (function () {
    function Laptop(tela) {
        this.tela = tela;
    }
    Laptop.prototype.ligarMonitor = function () {
        console.log('o monitor foi ligado');
    };
    return Laptop;
}());
//EXTENDS TRAS PARA A NOVA CLASSE OS ATRIBUTOS E METODOS 
var Lenovo = /** @class */ (function (_super) {
    __extends(Lenovo, _super);
    function Lenovo() {
        return _super.call(this, 21) || this;
    }
    Lenovo.prototype.aumentarBrilho = function (valor) {
        console.log("Brilho subiu ".concat(valor, "%"));
    };
    return Lenovo;
}(Laptop));
var computador = new Lenovo();
console.log(computador.tela + " Polegadas");
computador.ligarMonitor();
computador.aumentarBrilho(30);
var Dell = /** @class */ (function (_super) {
    __extends(Dell, _super);
    function Dell() {
        var _this = _super.call(this, 21) || this;
        _this.memoriaVideo = 512;
        return _this;
    }
    Dell.prototype.aumentarBrilho = function (valor) {
        console.log("Brilho subiu ".concat(valor, "%"));
    };
    return Dell;
}(Laptop));
