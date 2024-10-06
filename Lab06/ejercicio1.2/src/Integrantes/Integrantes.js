import React from 'react';

const Integrantes = ({ miembros = [] }) => {  // Valor por defecto a un array vacío
    return (
        <div>
            <h2>Integrantes</h2>
            <table border="2">
                <thead>
                <tr>
                    <th>DNI</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                </tr>
                </thead>
                <tbody>
                {miembros.map((usuario) => (
                    <tr key={usuario.DNI}>
                        <td>{usuario.DNI}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.edad}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Integrantes;
