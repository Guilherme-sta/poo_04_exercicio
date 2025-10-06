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

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    consultarSaldo(): number {
        return this.saldo;
        }
}

let c1: Conta = new Conta(1,"1",100);
let c2: Conta = new Conta(2,"2",100);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2,50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());