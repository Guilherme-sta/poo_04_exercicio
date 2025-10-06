var Equipamento = /** @class */ (function () {
    function Equipamento() {
    }
    Equipamento.prototype.ligar = function () {
        if (this.ligado != true) {
            this.ligado = true;
        }
    };
    Equipamento.prototype.desligar = function () {
        if (this.ligado != false) {
            this.ligado = false;
        }
    };
    Equipamento.prototype.inverter = function () {
        this.ligado = !this.ligado;
    };
    Equipamento.prototype.estaLigado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
var e1 = new Equipamento();
e1.ligado = false;
console.log(e1.estaLigado());
e1.inverter();
console.log(e1.estaLigado());
e1.desligar();
console.log(e1.estaLigado());
e1.ligar();
console.log(e1.estaLigado());
