import React, { useState } from 'react';
import './App.css';
import Tablita from './Tablita/Tablita';
import BarritaNav from './Barrita/Barrita';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Formulario/Form";
import './Tablita/Tablita.css';
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
        <div>
            <nav><BarritaNav /></nav>
            <div className="tablota">
                <Tablita
                    miembros={characters} // Pasar la lista de personajes a Tablita
                    incrementarEdad={incrementarEdad}
                    decrementarEdad={decrementarEdad}
                />
            </div>
            <div className="formsito">
                <Form onSubmit={handleSubmit} /> {/* Pasar handleSubmit como prop */}
            </div>
        </div>
    );
}

export default App;
