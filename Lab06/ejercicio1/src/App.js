import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarritaNav from './Barrita/Barrita';
import Integrantes from './Integrantes/Integrantes';
import Proyectos from './Proyectos/Proyectos';
import Contacto from './Contacto/Contacto';
import Tablita from './Tablita/Tablita';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <BarritaNav />
                </nav>
                <div className="container mt-4">
                    <Routes>
                        <Route path="/" element={<Tablita />} />  {/* Página inicial */}
                        <Route path="/integrantes" element={<Integrantes />} />  {/* Componente de Integrantes */}
                        <Route path="/proyectos" element={<Proyectos />} />  {/* Componente de Proyectos */}
                        <Route path="/contacto" element={<Contacto />} />  {/* Componente de Contacto */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
