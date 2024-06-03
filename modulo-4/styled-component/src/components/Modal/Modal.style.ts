import styled from "styled-components";

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100dvh;
	z-index: 999;
	background-color: rgba(14, 14, 14, 0.5);
`;

export const ModalWrapper = styled.div`
	position: absolute;
	top: 56px;
	left: 0;
	z-index: 9999;
	width: 100%;
	height: 100%;
	outline: 0;
	display: flex;
	align-items: center;
`;

export const ModalStyled = styled.div`
	background-color: rgb(237, 237, 237);
	position: relative;
	margin: auto;
	border-radius: 4px;
	max-width: 700px;
	padding: 24px;
`;

export const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	h4 {
		font-size: 24px;
	}
`;

export const ButtonModal = styled.button`
	font-size: 16px;
	font-weight: 600;
	color: #fff;
	cursor: pointer;
	padding: 8px 16px;
	border: none;
	background-color: rgb(0, 190, 171);
	border-radius: 4px;
`;
