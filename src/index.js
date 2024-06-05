import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResolveUrl from './ResolveUrl'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Defina Main como um componente funcional que configura o roteamento
const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> // A rota principal da sua aplicação
        <Route path="/:rashCode" element={<ResolveUrl />} /> // A rota para resolver a URL encurtada
        {/* Outras rotas podem ser adicionadas aqui */}
      </Routes>
    </Router>
  );
};

// Renderize o componente Main em vez de App
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
