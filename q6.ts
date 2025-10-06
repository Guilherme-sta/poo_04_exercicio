class Triangulo {
    ladoA: number;
    ladoB: number;
    ladoC: number;

    ehTriangulo(): boolean {
        let a = this.ladoA;
        let b = this.ladoB;
        let c = this.ladoC;
        let subBeC = b - c;
        if (subBeC < 0){
            subBeC *= -1;
        }

        return (
            subBeC < a &&
            a < (b + c)
        )
    }

    ehIsosceles(): boolean {
        if (!this.ehTriangulo()){
            return false;
        }

        return (this.ladoA == this.ladoB || this.ladoB == this.ladoC || 
            this.ladoA == this.ladoC);
    }

    ehEquilatero(): boolean {
        if (!this.ehTriangulo()){
            return false;
        } 

        return (this.ladoA == this.ladoB && this.ladoB == this.ladoC);
    }

    ehEscaleno(): boolean {
        if (!this.ehTriangulo()){
            return false;
        }

        return (this.ladoA != this.ladoB && this.ladoB != this.ladoC &&
            this.ladoA != this.ladoC);
    }
}

let l1: Triangulo = new Triangulo();
l1.ladoA = 10;
l1.ladoB = 4;
l1.ladoC = 4;
console.log(l1.ehTriangulo());
console.log(l1.ehIsosceles());

let l2: Triangulo = new Triangulo();
l2.ladoA = 7;
l2.ladoB = 4;
l2.ladoC = 4;
console.log(l2.ehTriangulo());
console.log(l2.ehIsosceles());

let l3: Triangulo = new Triangulo();
l3.ladoA = 6;
l3.ladoB = 6;
l3.ladoC = 6;
console.log(l3.ehIsosceles());
console.log(l3.ehEquilatero());
console.log(l3.ehEscaleno());

let l4: Triangulo = new Triangulo();
l4.ladoA = 5;
l4.ladoB = 4;
l4.ladoC = 3;
console.log(l4.ehEscaleno());