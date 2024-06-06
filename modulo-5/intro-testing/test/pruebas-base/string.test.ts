import { getSaludo } from "../../src/pruebas-base/string";
describe('Pruebas en string.ts', () => { 

  test('Debe retornar un string', () => { 
    // Arrange
    const nombre = "Paulo";

    // Act
    const saludo = getSaludo(nombre);

    // Assert
    expect(saludo).toBe("Hola Paulo");
    expect(typeof saludo).toBe("string");
    expect(saludo).toHaveLength(10);
  })

 })