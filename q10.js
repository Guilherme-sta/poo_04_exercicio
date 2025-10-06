var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontos) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }
    Jogador.prototype.calcularAtaque = function () {
        return this.forca * this.nivel;
    };
    Jogador.prototype.atacar = function (atacado) {
        if (this.estaVivo()) {
            atacado.pontos = atacado.pontos - this.calcularAtaque();
        }
    };
    Jogador.prototype.estaVivo = function () {
        return this.pontos > 0;
    };
    return Jogador;
}());
var j1 = new Jogador(2, 2, 12);
var j2 = new Jogador(4, 2, 10);
console.log(j1.pontos);
console.log(j2.pontos);
console.log(j1.calcularAtaque());
console.log(j2.calcularAtaque());
j1.atacar(j2);
j2.atacar(j1);
console.log(j1.pontos);
console.log(j2.pontos);
