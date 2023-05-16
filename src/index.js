import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import ShopApp from './components/ShopApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopApp/>
  </React.StrictMode>
);
