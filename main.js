function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}
function calcularResto(a, b){
    return a % b;
}

function calcular() {
    const num1 = Number(prompt("Ingrese el primer número: "));
    const num2 = Number(prompt("Ingrese el segundo número: "));
    const operacion = prompt("Ingrese la operación (+, -, *, /, %): ");

    switch (operacion) {
        case "+":
            alert("El resultado es: " + sumar(num1, num2));
            break;
        case "-":
            alert("El resultado es: " + restar(num1, num2));
            break;
        case "*":
            alert("El resultado es: " + multiplicar(num1, num2));
            break;
        case "/":
            alert("El resultado es: " + dividir(num1, num2));
            break;
        case "%":
            alert("El resultado es: " + calcularResto(num1, num2));
            break;
        default:
            alert("Operación no válida");
    }
}

calcular();