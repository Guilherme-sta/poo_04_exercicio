class Conta {
    id: number;
    numero: string;
    saldo: number;

    constructor(id: number, numero: string, 
                saldoInicial: number) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    sacar(valor: number): boolean {
        if ((this.saldo - valor) < 0) {
            return false;
        }
        this.saldo = this.saldo - valor;
        return true;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (!this.sacar(valor)) {
            return false;
        }
        contaDestino.depositar(valor);
        return true;
    }

    consultarSaldo(): number {
        return this.saldo;
        }
}

let c1: Conta = new Conta(1,"1",100);
let c2: Conta = new Conta(2,"2",100);
c1.sacar(10);
c1.transferir(c2,50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c1.sacar(50));
c1.sacar(50);
console.log(c1.consultarSaldo());
console.log(c1.transferir(c2,50))
c1.transferir(c2,50);
c2.transferir(c1,50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());