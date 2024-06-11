// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from "./mocks/server";


// Establecer la interceptación de API antes de todos los tests.
beforeAll(() => {
  console.log('Iniciando servidor MSW');
  server.listen();
});

// Restablecer cualquier handler de solicitud que se declare en nuestros tests después de cada test.
afterEach(() => server.resetHandlers());

// Limpiar después de que los tests hayan finalizado.
afterAll(() => {
  console.log('Cerrando servidor MSW');
  server.close();
});
