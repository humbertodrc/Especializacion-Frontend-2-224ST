import {render, screen, renderHook} from "@testing-library/react";
import Character from "../../components/Character/Character";
import {useApiCharacter} from "../../hooks/useApiCharacter";
import {url} from "../../api/endPoint";

describe("Pruebas en Character", () => {
	test("Debe mostar el mensaje de Loading...", () => {
		render(<Character />);

		const loading = screen.getByText("Loading...");
		// screen.debug();

		expect(loading).toBeInTheDocument();
	});

	test("Debe mostar un personaje", async () => {
		renderHook(() => useApiCharacter(url));

		render(<Character />);

		const character1 = await screen.findByText("Rick Sanchez");
		const character2 = await screen.findByText(/Morty Smith/i);

		expect(character1).toBeInTheDocument();
		expect(character2).toBeInTheDocument();
	});

	test("Debe  mostar la imagen del personaje", async () => {
		renderHook(() => useApiCharacter(url));

		render(<Character />);

		const images = await screen.findAllByRole("img");

		expect(images).toHaveLength(20); // para verificar que se estan mostrando las 20 imagenes
		expect(images[0]).toHaveAttribute(
			"src",
			"https://rickandmortyapi.com/api/character/avatar/1.jpeg"
		);
		expect(images[0]).toBeInTheDocument();
  });
  
  test('Debe mostar el status de los personajes, vivos muertos, desconocidos', async () => { 
    renderHook(() => useApiCharacter(url));

    render(<Character />);

    const statusLive = await screen.findAllByText(/Status: Alive/i);
    const statusDead = await screen.findAllByText(/Status: Dead/i);
    const statusUnknown = await screen.findAllByText(/Status: unknown/i);

    expect(statusLive.length).toBe(8);
    expect(statusDead).toHaveLength(6);
    expect(statusUnknown).toHaveLength(6);
   })
});
