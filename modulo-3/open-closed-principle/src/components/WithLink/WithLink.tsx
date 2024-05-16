interface WithLinkProps {
	href: string;
	text: string;
}

const WithLink = ({href, text}: WithLinkProps) => {
	return (
		<div>
			<a href={href}>{text}</a>
		</div>
	);
};
export default WithLink;
