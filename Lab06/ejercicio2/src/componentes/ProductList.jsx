import React, { useState } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [productos] = useState(['Producto 1', 'Producto 2', 'Producto 3']);
  
  const añadirCarrito = (producto) => {
    alert(`Añadido ${producto} al carrito`);
  };

  return (
    <div className="container">
      <h2>Lista de Productos</h2>
      <ul className="list-group">
        {productos.map((producto, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {producto}
            <button className="btn btn-primary btn-sm" onClick={() => añadirCarrito(producto)}>
              Añadir al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
