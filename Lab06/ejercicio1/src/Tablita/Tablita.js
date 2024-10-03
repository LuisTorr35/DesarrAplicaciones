import react from 'react';
import './Tablita.css'
const miembrosEcuipo = [
{DNI: 12345678, nombre: 'Fernando', edad: 29},
{DNI: 87654312, nombre: 'Andre', edad: 10},
{DNI: 19178423, nombre: 'Vladimir', edad:20},
{DNI: 73999505, nombre: 'Luis', edad: 30}
];
const Tablita = () => {
    return(
        <table border="2">
            <thead>
                <tr>
                    <th>DNI</th>
                    <th>Nombre</th>
                    <th>edad</th>
                </tr>
            </thead>

            <tbody>
            {miembrosEcuipo.map((usuario)=>(
                <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.name}</td>
                    <td>{usuario.edad}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
export default Tablita;