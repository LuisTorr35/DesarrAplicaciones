import React from 'react';

const ListaProductos = ({ handleAddToCart }) => {
  const productos = [
    { id: 1, nombre: 'Producto 1', precio: 50 },
    { id: 2, nombre: 'Producto 2', precio: 75 },
    { id: 3, nombre: 'Producto 3', precio: 100 },
  ];

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button onClick={() => handleAddToCart(producto)}>
              Añadir al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;
