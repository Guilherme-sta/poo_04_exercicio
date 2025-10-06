var Conta = /** @class */ (function () {
    function Conta(id, numero, saldoInicial) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldoInicial;
    }
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.sacar = function (valor) {
        if ((this.saldo - valor) < 0) {
            return false;
        }
        this.saldo = this.saldo - valor;
        return true;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        if (!this.sacar(valor)) {
            return false;
        }
        contaDestino.depositar(valor);
        return true;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
var c1 = new Conta(1, "1", 100);
var c2 = new Conta(2, "2", 100);
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c1.sacar(50));
c1.sacar(50);
console.log(c1.consultarSaldo());
console.log(c1.transferir(c2, 50));
c1.transferir(c2, 50);
c2.transferir(c1, 50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
