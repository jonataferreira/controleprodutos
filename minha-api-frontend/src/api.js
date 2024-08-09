// src/api.js

import axios from 'axios';

// Substitua pela URL do seu backend
const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = () => api.get('/products');
export const addProduct = (product) => api.post('/products', product);

export default api;
