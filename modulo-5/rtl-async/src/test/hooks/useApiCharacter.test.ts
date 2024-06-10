import {renderHook, waitFor} from "@testing-library/react";
import {useApiCharacter} from "../../hooks/useApiCharacter";
import {url} from "../../api/endPoint";

import {setupServer} from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.get(url, (req, res, ctx) => {
    return res(ctx.status(500))
  })
)

describe("Pruebas en useApiCharacter", () => {
	test("El estado inicial debe ser character = [], isLoading = true, error = false", () => {
		const {result} = renderHook(() => useApiCharacter(url));

		// console.log(result.current.character);

		expect(result.current.character).toEqual([]);
		expect(result.current.isLoading).toBe(true);
		expect(result.current.error).toBe(false);
	});

	test("Debe retornar personajes, isLoading = false, error = false", async () => {
		const {result} = renderHook(() => useApiCharacter(url));

		await waitFor(() => {
			expect(result.current.character.length).toBe(20);
		});

		await waitFor(() => {
			expect(result.current.isLoading).toBe(false);
		});

		await waitFor(() => {
			expect(result.current.error).toBe(false);
		});
	});

  test("Debe retornar character = [], isLoading = false, error = true", async () => {
    
    server.listen();

		const {result} = renderHook(() => useApiCharacter(url));

		await waitFor(() => {
			expect(result.current.character).toEqual([]);
		});

		await waitFor(() => {
			expect(result.current.isLoading).toBe(false);
		});

		await waitFor(() => {
			expect(result.current.error).toBe(true);
		});
	});
});
