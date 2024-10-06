import React from 'react'
export const PrimerComponente = () => {

    let nombre = "fernando";
    let correo = "fernando.apmarce22@gmail.com";

    let cursos = [
        "Sistemas de Información Administrativa II",
        "DESARROLLO DE APLICACIONES",
        "GESTION DE DATOS E INFORMACIÓN",
        "COMPUTACIÓN EN RED III"
    ];


    return (
        <div>
            <h1>primer componente</h1>
            <p>mi nombre es: {nombre}</p>
            <p>mi correo es: {correo}</p>

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
