// Principio de Abierto/Cerrado (OCP - Open/Closed Principle):
// El principio OCP establece que las clases deben estar abiertas para la extensión pero cerradas para la modificación.

// Mal ejemplo: Violando el OCP
class Calculadora {
  public sumar(a: number, b: number): number {
    return a + b;
  }
}

// Extender la funcionalidad
class CalculadoraAvanzada extends Calculadora {
  public restar(a: number, b: number): number {
    return a - b;
  }
}

// Correcto ejemplo: Cumpliendo el OCP
interface Operacion {
  operacion(numero1: number, numero2: number): number;
}

class Suma implements Operacion {
  operacion(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }
}

class Resta implements Operacion {
  operacion(numero1: number, numero2: number): number {
    return numero1 - numero2;
  }
}

const suma = new Suma();
const resta = new Resta();
console.log(suma.operacion(5, 3)); // 8
console.log(resta.operacion(8, 3)); // 5