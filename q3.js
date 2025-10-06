var Hotel = /** @class */ (function () {
    function Hotel(quanReservas) {
        this.quantReservas = quanReservas;
    }
    Hotel.prototype.adicionarReserva = function () {
        this.quantReservas++;
    };
    return Hotel;
}());
var hotel = new Hotel(2);
console.log(hotel.quantReservas);
