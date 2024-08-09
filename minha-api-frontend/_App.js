// src/App.js
import React from 'react';
import ProdutosList from './components/ProdutosList';
import AddProduto from './components/AddProduto';
import NotFoundPage from './components/NotFoundPage';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Minha API Frontend</h1>
            </header>
            <ProdutosList />
            <AddProduto />
        </div>
    );
}

export default App;
