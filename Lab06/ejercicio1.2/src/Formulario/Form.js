import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [dni, setDni] = useState('');
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoMiembro = { DNI: parseInt(dni), nombre, edad: parseInt(edad) };
        onSubmit(nuevoMiembro);
        setDni('');
        setNombre('');
        setEdad('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder="DNI" value={dni} onChange={(e) => setDni(e.target.value)} required />
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            <input type="number" placeholder="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} required />
            <button type="submit">Agregar Miembro</button>
        </form>
    );
};

export default Form;
