import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import './ProductPage.css';

const ProductPage = ({ produto }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  
  return (
    <div className="product-page">
      <h1>Lista de Produtos</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <h3>{product.name}</h3>
            <p>Preço: ${product.price}</p>
            <button>Detalhes</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;



// import React from 'react';
// import ProductForm from './ProductForm';  // Importe o componente ProductForm
// //import React, { useState } from 'react';
// import axios from 'axios';

// const ProductPage = () => {
//   return (
//     <div>
//       <h1>Gerenciamento de Produtos</h1>

//       <ProductForm />  {/* Inclua o componente ProductForm */}
      
//     </div>
//   );
// };

// export default ProductPage;