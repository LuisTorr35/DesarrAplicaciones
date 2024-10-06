import React, { useState } from 'react';

const Contador2 = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={incrementCount}>Incrementar</button>
        </div>
    );
};

export default Contador2;
