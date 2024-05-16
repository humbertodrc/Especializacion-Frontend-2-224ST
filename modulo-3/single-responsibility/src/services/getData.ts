import { Pokemons } from "../types/pokemon.types";

export const getData = async (url: string): Promise<Pokemons> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Network error');
  }
};
