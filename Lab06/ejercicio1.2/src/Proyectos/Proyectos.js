import React from 'react';

const proyectos = [
    { id: 1, nombre: 'Creación de App para el Gobierno', descripcion: 'Una app para gestionar trámites.' },
    { id: 2, nombre: 'Desarrollo para Empresa X', descripcion: 'Una solución de software para una empresa.' },
    { id: 3, nombre: 'Proyecto Personal', descripcion: 'Un proyecto freelance en desarrollo web.' }
];

const Proyectos = () => {
    return (
        <div>
            <h2>Proyectos</h2>
            <table border="2">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre del Proyecto</th>
                    <th>Descripción</th>
                </tr>
                </thead>
                <tbody>
                {proyectos.map((proyecto) => (
                    <tr key={proyecto.id}>
                        <td>{proyecto.id}</td>
                        <td>{proyecto.nombre}</td>
                        <td>{proyecto.descripcion}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Proyectos;
