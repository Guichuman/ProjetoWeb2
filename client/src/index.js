import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './view/login';
import Home from './view/home';
import Routes from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

