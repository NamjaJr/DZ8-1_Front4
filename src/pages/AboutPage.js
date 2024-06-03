import React from 'react';
import { useModal } from '../context/ModalContext';
import ModalWindow from '../components/ModalWindow';

const AboutPage = () => {
    const { closeModal } = useModal();

    return (
        <div>
            <h1>About Page</h1>
            <button onClick={closeModal}>Закрыть модальное окно</button>
            <ModalWindow content={<div>Это содержимое модального окна</div>} />
        </div>
    );
};

export default AboutPage;



