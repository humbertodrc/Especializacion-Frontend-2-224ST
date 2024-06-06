import {suma} from "../../src/pruebas-base/number";
describe("Pruebas en number.ts", () => {
	test("Debe retornas la suma de dos numeros", () => {
		// arrange
		const number1 = 5;
		const number2 = 10;

		// act
		const resultado = suma(number1, number2);

		// assert
		expect(resultado).toBe(15);
		expect(resultado).toEqual(15);
		expect(typeof resultado).toBe("number");
	});
});
