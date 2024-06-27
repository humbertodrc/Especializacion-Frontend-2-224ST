import {gql} from "@apollo/client";

export const GET_CHARACTERS = gql`
	query getCharacters {
		characters {
			results {
				id
				name
				status
				species
				image
			}
		}
	}
`;

export const GET_CHARACTER_BY_ID = gql`
	query getCharacter($id: ID!) {
		character(id: $id) {
			id
			name
			status
			species
			image
		}
	}
`;
