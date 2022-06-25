import React from 'react';
import ReactDOM from 'react-dom/client';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastreVilao from './pages/cadastrar'
import ConsultarVilao from './pages/consultar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<CadastreVilao />}/>
        <Route path="/viloes" element={<ConsultarVilao />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


