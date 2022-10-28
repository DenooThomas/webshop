import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {CartContextProvider} from 'context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <CartContextProvider>
            <Router>
                <App />
            </Router>
        </CartContextProvider>
    );
