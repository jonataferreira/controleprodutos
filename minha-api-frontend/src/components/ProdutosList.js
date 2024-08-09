// src/components/ProdutosList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProdutosList = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/produtos')
            .then(response => {
                setProdutos(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar produtos:', error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>{produto.nome} - R${produto.preco}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProdutosList;
