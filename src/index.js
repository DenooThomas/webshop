import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { ProductContextProvider } from 'context/ProductContext';
import {CartContextProvider} from 'context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <ProductContextProvider>
        <CartContextProvider>
            <Router>
                <App />
            </Router>
        </CartContextProvider>
        </ProductContextProvider>
    );
