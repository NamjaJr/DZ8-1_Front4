import React from 'react';
import { useModal } from '../context/ModalContext';

const MainPage = () => {
    const { openModal } = useModal();

    return (
        <div>
            <h1>Main Page</h1>
            <button onClick={openModal}>Открыть модальное окно</button>
        </div>
    );
};

export default MainPage;


