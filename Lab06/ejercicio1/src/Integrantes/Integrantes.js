import React from 'react';

const integrantes = [
    { DNI: 12345678, nombre: 'Fernando', edad: 29 },
    { DNI: 87654312, nombre: 'Andre', edad: 10 },
    { DNI: 19178423, nombre: 'Vladimir', edad: 20 },
    { DNI: 73999505, nombre: 'Luis', edad: 30 }
];

const Integrantes = () => {
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
                {integrantes.map((integrante) => (
                    <tr key={integrante.DNI}>
                        <td>{integrante.DNI}</td>
                        <td>{integrante.nombre}</td>
                        <td>{integrante.edad}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Integrantes;
