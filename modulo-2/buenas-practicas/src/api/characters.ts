import {ApiResponse, Character} from "../types/character";

// export const getCharacters = async(): Promise<ApiResponse> => {
//   return fetch('https://rickandmortyapi.com/api/character')
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// };

export const getCharacters = async (): Promise<ApiResponse> => {
	return fetch("https://rickandmortyapi.com/api/character")
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}

			return response.json();
		})
		.catch((error) => {
			console.log(error);
			throw new Error("Network response was not ok");
		});
};

export const getCharacters2 = async (): Promise<ApiResponse> => {
	try {
		const response = await fetch("https://rickandmortyapi.com/api/character");
		if (!response.ok) {
			throw new Error(response.statusText);
		}

		return response.json();
	} catch (error) {
		console.log(error);
		throw new Error("Network response was not ok");
	}
};

const defaultHeaders = {
  "Content-Type": "application/json",
	Accept: "application/json",
}

class HttpError extends Error {
	constructor(public response: Response) {
		super(`${response.statusText} for ${response.url}`);
    this.response = response;
	}
}


function handlerResponse(response: Response) {
  if(!response.ok) {
    throw new HttpError(response);
  }

  return response.json();
}

export const getCharacters3 = async (): Promise<ApiResponse> => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  return handlerResponse(response);
};

export const createCharacter = async (character: Character): Promise<Character> => {
  const response = await fetch("https://rickandmortyapi.com/api/character", {
    method: "POST",
    body: JSON.stringify(character),
    headers: defaultHeaders,
  });

  return handlerResponse(response);
}


