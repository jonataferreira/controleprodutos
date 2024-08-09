// src/components/AddProduto.js
import React, { useState } from 'react';
import axios from 'axios';

const AddProduto = () => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoProduto = {
            nome,
            preco: parseFloat(preco)
        };

        axios.post('http://localhost:5000/api/produtos', novoProduto)
            .then(response => {
                alert('Produto adicionado com sucesso!');
                setNome('');
                setPreco('');
            })
            .catch(error => {
                console.error('Erro ao adicionar produto:', error);
            });
    };

    return (
        <div>
            <h1>Adicionar Produto</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label>Preço:</label>
                    <input
                        type="text"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </div>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
};

export default AddProduto;
