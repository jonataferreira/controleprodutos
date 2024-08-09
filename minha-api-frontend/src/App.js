import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import ProductForm from './components/ProductForm';
import NotFoundPage from './components/NotFoundPage';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [products, setProducts] = React.useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage products={products} />} />
        <Route path="/add-product" element={<ProductForm addProduct={addProduct} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;


// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import ProductPage from './components/ProductPage'; // Importa a página de produtos
// import HomePage from './components/HomePage'; // (Opcional) Uma página inicial ou qualquer outra página
// import NotFoundPage from './components/NotFoundPage'; // (Opcional) Página para rotas não encontradas
// import './App.css'; // (Opcional) Estilos globais específicos para o App

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<HomePage />} />  {/* Rota para a página inicial */}
//         <Route path="/products" element={<ProductPage />} />  {/* Rota para a página de produtos */}
//         <Route path="*" element={<NotFoundPage />} />  {/* Rota para página não encontrada */}
//       </Routes>
//     </div>
//   );
// }

// export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// src/App.js

