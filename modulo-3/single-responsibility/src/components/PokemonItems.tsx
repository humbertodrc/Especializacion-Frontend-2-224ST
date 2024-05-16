interface PokemonItemsProps {
	name: string;
}

const PokemonItems = ({name}: PokemonItemsProps) => {
	return <li>{name}</li>;
};
export default PokemonItems;
