import React, { useState } from 'react';
import './App.css';
import Tablita from './Tablita/Tablita';
import BarritaNav from './Barrita/Barrita';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Formulario/Form";
import './Tablita/Tablita.css';
import Contacto from './Contacto/Contacto';
import Proyectos from './Proyectos/Proyectos';
import Integrantes from './Integrantes/Integrantes';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    const [characters, setCharacters] = useState([]); // Define el estado para los personajes

    const handleSubmit = (character) => {
        setCharacters([...characters, character]); // Actualiza el estado de personajes
    };

    const incrementarEdad = (DNI) => {
        setCharacters(characters.map(usuario =>
            usuario.DNI === DNI ? { ...usuario, edad: usuario.edad + 1 } : usuario
        ));
    };

    const decrementarEdad = (DNI) => {
        setCharacters(characters.map(usuario =>
            usuario.DNI === DNI ? { ...usuario, edad: usuario.edad - 1 } : usuario
        ));
    };

    return (
        <Router>
            <div>
                <nav><BarritaNav /></nav>
                <Routes>
                    <Route path="/" element={
                        <div>
                            <div className="tablota">
                                <Tablita
                                    miembros={characters} // Pasar la lista de personajes a Tablita
                                    incrementarEdad={incrementarEdad}
                                    decrementarEdad={decrementarEdad}
                                />
                            </div>
                        </div>
                    }/>
                    <Route path="/integrantes" element={<Integrantes miembros={characters} />} />  {/* Componente de Integrantes */}
                    <Route path="/proyectos" element={<Proyectos />} />  {/* Componente de Proyectos */}
                    <Route path="/contacto" element={<Contacto />} />  {/* Componente de Contacto */}
                    {/* Nueva ruta para ingresar nuevos integrantes */}
                    <Route path="/agregar" element={<Form onSubmit={handleSubmit} />} />  {/* Formulario para agregar integrantes */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
