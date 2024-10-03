import React from 'react';

const Tablita = ({ miembros, incrementarEdad, decrementarEdad }) => {
    return (
        <table border="2">
            <thead>
            <tr>
                <th>DNI</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Acciones</th>
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
