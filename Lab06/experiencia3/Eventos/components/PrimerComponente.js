import React, {useState} from 'react';

export const PrimerComponente = () => {

    //let nombre = "fernando";
    let correo = "fernando.apmarce22@gmail.com";

    const [nombre, setNombre] = useState("Fernando");
    let cursos = [
        "Sistemas de Información Administrativa II",
        "DESARROLLO DE APLICACIONES",
        "GESTION DE DATOS E INFORMACIÓN",
        "COMPUTACIÓN EN RED III"
    ];

    const cambiarNombre = (nuevoNombre) =>{ setNombre(nuevoNombre);}
    return (
        <div>
            <h1>primer componente</h1>
            <p>texto para mi primer componente</p>
            <p>mi nombre es: {nombre}</p>
            <p>mi correo es: {correo}</p>

            <button onClick={e => cambiarNombre("Gabriel")}>cambiarNombre</button>

            <h2>Cursos: </h2>
            <ul>
                {
                    cursos.map((curso,indice) =>{
                        return (<li key={indice}>{curso}</li>)
                    })

                }
            </ul>
        </div>
    )
}
