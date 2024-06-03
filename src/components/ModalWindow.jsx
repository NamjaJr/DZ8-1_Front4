
import React from 'react';
import { useModal } from '../context/ModalContext';

const ModalWindow = ({ content }) => {
    const { isModalOpen, closeModal } = useModal();

    if (!isModalOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                {content}
            </div>
        </div>
    );
};

export default ModalWindow;

