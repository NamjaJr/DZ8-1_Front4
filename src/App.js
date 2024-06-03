import React from 'react';
import { ModalProvider } from './context/ModalContext';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import './App.css';

const App = () => {
    return (
        <ModalProvider>
            <div className="app">
                <MainPage />
                <AboutPage />
            </div>
        </ModalProvider>
    );
};

export default App;

