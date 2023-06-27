import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './view/login';
import Home from './view/home';
import About from './view/about';
import Produtos from './view/produtos';
import Vendas from './view/vendas';
import Contato from './view/contato';
import CadastroUsuario from './view/cadastroUsuario';

const Rotas = () => {
  return(
    <Router>
      <Routes>
        <Route Component={Login} path='/' exact />
        <Route Component={Home} path='/home' />
        <Route Component={About} path='/about' />
        <Route Component={Produtos} path='/produtos' />
        <Route Component={Vendas} path='/vendas' />
        <Route Component={Contato} path='/contato' />
        <Route Component={Contato} path='/contato' />
        <Route Component={CadastroUsuario} path='/cadastroUsuario' />
      </Routes>
    </Router>
  )
}

export default Rotas