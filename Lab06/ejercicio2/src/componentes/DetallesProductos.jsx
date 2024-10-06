import React from 'react';
import { useParams } from 'react-router-dom';

const DetallesProductos = ({ handleAddToCart }) => {
  const { id } = useParams();
  const producto = {
    id: id,
    nombre: `Producto Detallado ${id}`,
    precio: 150,
    descripcion: 'Descripción del producto detallado.',
  };

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <button onClick={() => handleAddToCart(producto)}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default DetallesProductos;
