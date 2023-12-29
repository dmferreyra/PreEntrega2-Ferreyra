let saldo = 0;
let extracto = [];

// Objeto para simular una transacción bancaria
function Transaccion(tipo, monto) {
    this.tipo = tipo;
    this.monto = monto;
}

// Funciones para simular el cajero automático
function consultarSaldo() {
    return saldo;
}

function consultarExtracto() {
    return extracto;
}

function depositar(monto) {
    saldo += monto;
    extracto.push(new Transaccion("Depósito", monto));
}

function retirar(monto) {
    if (saldo >= monto) {
        saldo -= monto;
        extracto.push(new Transaccion("Retiro", monto));
    } else {
        alert("Saldo insuficiente");
    }
}

// Programa principal
let operacion = prompt("Ingrese la operación (Consultar Saldo, Consultar Extracto, Depositar, Retirar): ");

switch (operacion) {
    case "Consultar Saldo":
        alert("El saldo actual es: " + consultarSaldo());
        break;
    case "Consultar Extracto":
        alert("El extracto de la cuenta es: " + JSON.stringify(consultarExtracto()));
        break;
    case "Depositar":
        let montoDepositar = Number(prompt("Ingrese el monto a depositar: "));
        depositar(montoDepositar);
        break;
    case "Retirar":
        let montoRetirar = Number(prompt("Ingrese el monto a retirar: "));
        retirar(montoRetirar);
        break;
    default:
        alert("Operación no válida");
}