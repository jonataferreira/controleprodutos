import React, { useState } from 'react';
import { addProduct } from '../api';
import './ProductForm.css';

const ProductForm = ({ addProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { productName, productPrice };

    try {
      await addProduct(newProduct);
      alert('Produto adicionado com sucesso!');
      addProduct({ name: productName, price: productPrice });
      setProductName('');
      setProductPrice('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (productName && productPrice) {
  //     addProduct({ name: productName, price: productPrice });
  //     setProductName('');
  //     setProductPrice('');
  //   }
    
  // };

  return (
    <div className="product-form">
      <h2>Adicionar Novo Produto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome do Produto:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label>Preço do Produto:</label>
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
};

export default ProductForm;






// import React, { useState } from 'react';
// import axios from 'axios';

// const ProductForm = ({ addProduct }) => {

  
//   // State para armazenar os valores do formulário
//   const [product, setProduct] = useState({
//     name: '',
//     price: '',
//     description: '',
//   });

//   // Função para atualizar o state com os valores dos campos de input
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({
//       ...product,
//       [name]: value,
//     });
//   };

//   // Função para enviar os dados do formulário ao backend
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Fazendo a requisição POST para o backend
//       const response = await axios.post('http://localhost:5000/api/products', product);
//       console.log('Produto adicionado com sucesso:', response.data);
      
//       // Limpa o formulário após o envio
//       setProduct({
//         name: '',
//         price: '',
//         description: '',
//       });
      
//     } catch (error) {
//       console.error('Erro ao adicionar produto:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Nome do Produto:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={product.name}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="price">Preço:</label>
//         <input
//           type="number"
//           id="price"
//           name="price"
//           value={product.price}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="description">Descrição:</label>
//         <textarea
//           id="description"
//           name="description"
//           value={product.description}
//           onChange={handleChange}
//           required
//         ></textarea>
//       </div>

//       <button type="submit">Adicionar Produto</button>
//     </form>
//   );
// };

// export default ProductForm;
