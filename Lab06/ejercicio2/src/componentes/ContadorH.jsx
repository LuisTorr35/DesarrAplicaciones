import React, { useState } from 'react';

const ContadorH= () => {
  const [count, setCount] = useState(0);

  const aumento = () => {
    setCount(count + 1);
  }

  const disminuyo = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  

  return (
    <div className="counter-container">
      <h2>Contador con Funciones y useState</h2>
      <p>Valor actual: {count}</p>
      <button onClick={aumento} className="btn btn-success">Incrementar</button>
      <button onClick={disminuyo} className="btn btn-danger">Disminuir</button>
    </div>
  );
}

export default ContadorH;
