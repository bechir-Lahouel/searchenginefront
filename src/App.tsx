import React from 'react';
import Home from './pages/Home';
import './App.css';
import { BookProvider } from './context/BookContext';

function App() {
    return (
        <BookProvider>
            <Home />
        </BookProvider>
    );
}

export default App;
