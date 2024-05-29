import { createUseStyles } from "react-jss";
import { Status, useApi } from '../../hooks/useApi';
import './style.css';

interface CharacterI {
	id: number;
	image: string;
	name: string;
	status: string;
	species: string;
	gender: string;
}

interface Character extends Status {
	borderRadius?: string;
	width: string;
	height: string;
	padding: string;
	textAlign: string;
 }

interface CharacterStylesProps {
	borderRadius?: string;
	width: string;
	height: string;
	padding: string;
	textAlign: string;
}
 
const useStyles = createUseStyles({
	card: {
		borderRadius: (props: CharacterStylesProps) => props.borderRadius || '10px',
		width: (props: CharacterStylesProps) => props.width || '100%',
		height: (props: CharacterStylesProps) => props.height || '100%',
		padding: (props: CharacterStylesProps) => props.padding,
		textAlign: (props: CharacterStylesProps) => props.textAlign
	}
})

const Character = ({status,borderRadius, width, height, padding, textAlign }: Character) => {
	
	const { character } = useApi({ status });
	
	const classes = useStyles({
		borderRadius,
		width,
		height,
		padding,
		textAlign
	})

	return (
		<section>
			{character.map((data: CharacterI) => {
				return (
					<article key={data.id} className={classes.card}>
						<img src={data.image} />
						<div>
							<h2>{data.name}</h2>
							<p>Status: {data.status}</p>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default Character;
