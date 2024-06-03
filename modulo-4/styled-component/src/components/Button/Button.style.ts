import styled from "styled-components";

interface ButtonProps {
	isPrimary?: boolean;
}

export const ButtonStyled = styled.button<ButtonProps>`
	cursor: pointer;
	padding: 1rem 2rem;
	text-transform: uppercase;
	font-size: 18px;
	border-radius: 4px;
  color: #fff;
  background-color: ${(props) => (props.isPrimary ? "#FF1493" : "#00008B")};
  border: 1px solid ${(props) => (props.isPrimary ? "#FF1493" : "#00008B")};

  &:hover {
    background-color: ${(props) => (props.isPrimary ? "#FF69B4" : "#0000CD")};
  }
`;


export const ButtonStylesOutline = styled(ButtonStyled)`
  color: ${(props) => props.isPrimary ? "#FF1493" : "#00008B"};
  background: transparent;
  border: 1px solid ${(props) => (props.isPrimary ? "#FF1493" : "#00008B")};
`;