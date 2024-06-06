import { reverseCallBack, reverseString } from "../../src/pruebas-base/callBack";
describe('Pruenas en callback.ts', () => { 
  test('Debe reversar un string', () => { 

    // Arrange
    const str = "Hola";

    // Act
    const resultado = reverseCallBack(str, reverseString);

    // Assert
    expect(resultado).toBe("aloH");

   })
 })