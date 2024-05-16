interface WithButtonProps {
	onClick: () => void;
	text: string;
}

const WithButton = ({onClick, text}: WithButtonProps) => {
	return <button onClick={onClick}>{text}</button>;
};
export default WithButton;
