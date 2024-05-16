import {useEffect, useState} from "react";
import {Result} from "../types/pokemon.types";
import useApi from "../hook/useApi";
import PokemonItems from "./PokemonItems";

// Single-responsibility principle: Este principio establece que una clase debe tener una única razón para cambiar. Debe tener una sola responsabilidad.
// En el siguiente componente estamos violando el principio SRP
// Debemos identificar que logica podemos extrar en un nuevo componente
// para mejorar nuestro codigo

const PokemonList = () => {
	const {data: pokemons} = useApi();

	return (
		<section>
			<h1>SRP 👨‍💻</h1>
			<ul>
				{pokemons.map((pokemon: Result) => (
					<PokemonItems key={pokemon.name} name={pokemon.name} />
				))}
			</ul>
		</section>
	);
};

export default PokemonList;
