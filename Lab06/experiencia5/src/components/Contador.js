import React, { useEffect, useRef } from 'react';

const Contador = () => {
    // useRef para manejar el valor del contador
    const countRef = useRef(0); // Similar a una variable mutable, no causa renderizado

    // useEffect para manejar la lógica del contador
    useEffect(() => {
        console.log("El componente Contador se ha montado.");

        // No es necesario un cleanup en este caso, pero lo dejo como ejemplo
        return () => {
            console.log("El componente Contador se va a desmontar.");
        };
    }, []);

    // Función para incrementar el contador
    const incrementCount = () => {
        countRef.current += 1; // Incrementa la referencia del contador
        document.getElementById("contador").innerText = `Contador: ${countRef.current}`; // Actualiza manualmente el DOM
    };

    return (
        <div>
            <h1 id="contador">Contador: {countRef.current}</h1>
            <button onClick={incrementCount}>Incrementar</button>
        </div>
    );
};

export default Contador;
