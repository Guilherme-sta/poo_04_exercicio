var Triangulo = /** @class */ (function () {
    function Triangulo() {
    }
    Triangulo.prototype.ehTriangulo = function () {
        var a = this.ladoA;
        var b = this.ladoB;
        var c = this.ladoC;
        var subBeC = b - c;
        if (subBeC < 0) {
            subBeC *= -1;
        }
        return (subBeC < a &&
            a < (b + c));
    };
    Triangulo.prototype.ehIsosceles = function () {
        if (!this.ehTriangulo()) {
            return false;
        }
        return (this.ladoA == this.ladoB || this.ladoB == this.ladoC ||
            this.ladoA == this.ladoC);
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (!this.ehTriangulo()) {
            return false;
        }
        return (this.ladoA == this.ladoB && this.ladoB == this.ladoC);
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (!this.ehTriangulo()) {
            return false;
        }
        return (this.ladoA != this.ladoB && this.ladoB != this.ladoC &&
            this.ladoA != this.ladoC);
    };
    return Triangulo;
}());
var l1 = new Triangulo();
l1.ladoA = 10;
l1.ladoB = 4;
l1.ladoC = 4;
console.log(l1.ehTriangulo());
console.log(l1.ehIsosceles());
var l2 = new Triangulo();
l2.ladoA = 7;
l2.ladoB = 4;
l2.ladoC = 4;
console.log(l2.ehTriangulo());
console.log(l2.ehIsosceles());
var l3 = new Triangulo();
l3.ladoA = 6;
l3.ladoB = 6;
l3.ladoC = 6;
console.log(l3.ehIsosceles());
console.log(l3.ehEquilatero());
console.log(l3.ehEscaleno());
var l4 = new Triangulo();
l4.ladoA = 5;
l4.ladoB = 4;
l4.ladoC = 3;
console.log(l4.ehEscaleno());
