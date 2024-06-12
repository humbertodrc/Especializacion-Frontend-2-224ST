import {render, screen, fireEvent} from "@testing-library/react";
import App from "../App";

describe("Pruebas en <App />", () => {
	test("Debe renderizar el componente", () => {
		// Arrange
		render(<App />);

		// Act
		const title = screen.getByText(/Testing Async/i);
		const input = screen.getByPlaceholderText(/Search/i);
		const button = screen.getByText(/Search/i);

		// Assert
		expect(title).toBeInTheDocument();
		expect(input).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});

	test("Debe mostar los personajes", async () => {
		// Arrange
		render(<App />);

		// Act
		const rick = await screen.findByText(/Rick/i);
		const morty = await screen.findByText(/Morty/i);

		// Assert
		expect(rick).toBeInTheDocument();
		expect(morty).toBeInTheDocument();

		// screen.debug();
	});

	test("Usuario debe poder buscar un personaje", async () => {
		// Arrange
		render(<App />);

		// Act
		const input = screen.getByPlaceholderText(/Search/i);
		fireEvent.change(input, {target: {value: "Rick"}});
		const button = screen.getByText(/Search/i);
		fireEvent.click(button);

		const rick = await screen.findByText(/Rick/i);

		// Assert
		expect(rick).toBeInTheDocument();
	});

	test("Debe hacer match con el snapshot", async () => {
		// Arrange
		const {container} = render(<App />);

		// Act
		const rick = await screen.findByText(/Rick/i);

		// Assert
		expect(rick).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
