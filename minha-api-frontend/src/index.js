import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import './index.css'; // Se você tiver um arquivo de estilos global

// // Obtém a referência ao elemento root no DOM
// const rootElement = document.getElementById('root');

// // Cria a raiz do ReactDOM e renderiza o componente App dentro de um BrowserRouter
// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
