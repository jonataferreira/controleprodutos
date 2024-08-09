import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Produtos</Link></li>
        <li><Link to="/add-product">Adicionar Produto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;