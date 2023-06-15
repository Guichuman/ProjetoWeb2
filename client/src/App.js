import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './view/login';
import Home from './view/home';

const Rotas = () => {
  return(
    <Router>
      <Routes>
        <Route Component={Login} path='/' exact />
        <Route Component={Home} path='/home' />
      </Routes>
    </Router>
  )
}

export default Rotas