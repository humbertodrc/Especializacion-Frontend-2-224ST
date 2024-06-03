import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonModal, ModalHeader, ModalOverlay, ModalStyled, ModalWrapper } from "./Modal.style";
// import './style.css'

export interface ModalInterface {
	isShowing: boolean;
	hide: () => void;
	title: string;
	children: React.ReactNode;
}

const Modal : React.FC<ModalInterface> = ({ isShowing, hide, title, children}) => {
	return isShowing
    ? ReactDOM.createPortal(
      <>
        <ModalOverlay>
          <ModalWrapper>
            <ModalStyled>
              <ModalHeader>
                <h4>{title}</h4>
                <ButtonModal className="modal-close-button" onClick={hide}>
                  Cerrar
                </ButtonModal>
              </ModalHeader>
              <div>{children}</div>
            </ModalStyled>
          </ModalWrapper>
        </ModalOverlay>
      </>,
      document.body
    )
    : null;
};

export default Modal;
