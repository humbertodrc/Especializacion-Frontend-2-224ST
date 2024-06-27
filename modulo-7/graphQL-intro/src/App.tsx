import {useQuery} from "@apollo/client";
import "./App.css";
import {GET_CHARACTERS, GET_CHARACTER_BY_ID} from "./querys";
import {CharacterData, CharactersData} from "./types/character.types";
import {useState} from "react";

function App() {
	const [id, setId] = useState<number | null>(null);
	const {loading, data, error} = useQuery<CharactersData>(GET_CHARACTERS);
	const {
		loading: isLoading,
		data: character,
		error: hasError,
	} = useQuery<CharacterData>(GET_CHARACTER_BY_ID, {
		variables: {
			id,
		},
		// Omitimos la ejecución de la consulta si id no está definido
		skip: !id,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value);
		setId(isNaN(value) ? null : value);
	};

	console.log(character);

	return (
		<>
			<h1>GraphQL Intro</h1>
			<div>
				<label>
					Character ID:
					<input value={id || ""} onChange={handleChange} />
				</label>
				{isLoading && <p>Loading...</p>}
				{hasError && <p>Error</p>}
				<div className="container">
					{character && character.character && (
						<div className="card" key={character.character.id}>
							<img
								src={character.character.image}
								alt={character.character.name}
							/>
							<div>
								<h2>{character.character.name}</h2>
								<p>
									{character.character.status} - {character.character.species}
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="container">
				{loading && <p>Loading...</p>}
				{error && <p>Error</p>}
				{data &&
					data.characters &&
					data.characters.results.map((character) => (
						<div className="card" key={character.id}>
							<img src={character.image} alt={character.name} />
							<div>
								<h2>{character.name}</h2>
								<p>
									{character.status} - {character.species}
								</p>
							</div>
						</div>
					))}
			</div>
		</>
	);
}

export default App;
