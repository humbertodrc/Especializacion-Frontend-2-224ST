import React from 'react';
import { ButtonStyled, ButtonStylesOutline } from "./Button.style";
export interface ButtonProps {
	children: React.ReactNode;
	isPrimary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isPrimary }) => {
	return <ButtonStylesOutline isPrimary= {isPrimary}>{children }</ButtonStylesOutline>;
};

export default Button;
