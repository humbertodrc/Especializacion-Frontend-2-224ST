import React from "react";
import { createUseStyles } from "react-jss";


export interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	backGroundColor: string;
	spacing: string;
	labelColor: string;
	fontWeight: string;
	fontStyle: string;
	fontSize: string;
}

interface ButtonStylesProps {
	backGroundColor: string;
	spacing: string;
	labelColor: string;
	fontWeight: string;
	fontStyle: string;
	fontSize: string;
}

const useStyles = createUseStyles({
	button: {
		padding: (props: ButtonStylesProps) => props.spacing,
		backgroundColor: (props: ButtonStylesProps) => props.backGroundColor,
	},
	label: {
		color: (props: ButtonStylesProps) => props.labelColor,
		fontWeight: (props: ButtonStylesProps) => props.fontWeight,
		fontStyle: (props: ButtonStylesProps) => props.fontStyle,
		fontSize: (props: ButtonStylesProps) => props.fontSize,
	}
})

const Button: React.FC<ButtonProps> = ({ children, backGroundColor, fontSize, fontStyle, fontWeight, labelColor, spacing, onClick }) => {
	
	const classes = useStyles({
		backGroundColor,
		fontSize,
		fontStyle,
		fontWeight,
		labelColor,
		spacing
	})

	return (
		<button className={classes.button} onClick={onClick}>
			<span className={classes.label}>{children}</span>
		</button>
	);
};

export default Button;
