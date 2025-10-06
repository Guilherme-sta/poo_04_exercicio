class Jogador {
    forca : number;
    nivel : number;
    pontos : number;

    constructor (forca : number, nivel : number, pontos : number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }

    calcularAtaque() : number {
        return this.forca * this.nivel;
    }

    atacar(atacado : Jogador) : void {
        if (this.estaVivo()) {
            atacado.pontos = atacado.pontos - this.calcularAtaque();
        }
    }

    estaVivo() : boolean{
        return this.pontos > 0;
    }
}

let j1: Jogador = new Jogador(2,2,12)
let j2: Jogador = new Jogador(4,2,10)
console.log(j1.pontos);
console.log(j2.pontos);
console.log(j1.calcularAtaque());
console.log(j2.calcularAtaque());
j1.atacar(j2);
j2.atacar(j1);
console.log(j1.pontos);
console.log(j2.pontos);