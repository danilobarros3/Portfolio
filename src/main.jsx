// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importa o componente principal do aplicativo
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
