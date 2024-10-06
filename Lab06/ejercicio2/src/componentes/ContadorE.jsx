import React, { useState, useEffect } from 'react';

function ContadorE() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("El componente se ha renderizado o actualizado");

    document.title = `Contador: ${count}`;

    return () => {
      console.log("El componente se está desmontando");
    };
  }, [count]); 

  return (
    <div className='counter-container'>
        <h2>Contador con UseEffect</h2>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar contador</button>
    </div>
  );
}

export default ContadorE;
