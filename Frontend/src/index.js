import React from 'react';
import ReactDOM from 'react-dom/client';
import './Tailwind.css';
import './Style.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);