import React, { useState } from 'react';
import './Tablita.css';

const miembrosEcuipo = [
    { DNI: 12345678, nombre: 'Fernando', edad: 29 },
    { DNI: 87654312, nombre: 'Andre', edad: 10 },
    { DNI: 19178423, nombre: 'Vladimir', edad: 20 },
    { DNI: 73999505, nombre: 'Luis', edad: 30 }
];

const Tablita = () => {
    // Usa useState para manejar la lista de miembros
    const [miembros, setMiembros] = useState(miembrosEcuipo);

    // Funciones para incrementar y decrementar la edad
    const incrementarEdad = (DNI) => {
        setMiembros(miembros.map(usuario =>
            usuario.DNI === DNI ? { ...usuario, edad: usuario.edad + 1 } : usuario
        ));
    };

    const decrementarEdad = (DNI) => {
        setMiembros(miembros.map(usuario =>
            usuario.DNI === DNI ? { ...usuario, edad: usuario.edad - 1 } : usuario
        ));
    };

    return (
        <table border="2">
            <thead>
            <tr>
                <th>DNI</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Acciones</th> {/* Nueva columna para las acciones */}
            </tr>
            </thead>

            <tbody>
            {miembros.map((usuario) => (
                <tr key={usuario.DNI}>
                    <td>{usuario.DNI}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.edad}</td>
                    <td>
                        <button onClick={() => incrementarEdad(usuario.DNI)}>Incrementar</button>
                        <button onClick={() => decrementarEdad(usuario.DNI)}>Decrementar</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Tablita;
