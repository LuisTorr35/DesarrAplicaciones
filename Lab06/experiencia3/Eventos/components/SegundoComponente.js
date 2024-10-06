import React from 'react'

export const SegundoComponente = () => {

    const tareasPendientes = [
        { id: 1, name: "guia5" },
        { id: 2, name: "guia6" },
        { id: 3, name: "expo" }
    ];

    return (
        <div>
            <h2>segundo componente</h2>
            <h3>Integrantes</h3>
            <ul>
                <li>Apaza Marce Fernando</li>
                <li>Huaroc Condori Andre</li>
                <li>Huayllani Carrasco Vladimir</li>
                <li>Torres Quispe Luis</li>
            </ul>
            <h3>Tareas Pendientes</h3>
            <ul>
                {tareasPendientes.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}
