"use client";
import React, { useState } from 'react';
import Todo from '../components/Todo';
import Form from '../components/Form';
import styles from './page.module.css';

const App = () => {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  const eliminarProducto = (index) => {
    setProductos(productos.filter((_, i) => i !== index));
  };

  const total = productos.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

  return (
    <div className={styles.main}>
      <h1 className={styles.Titulo3}>Gestión de Compras</h1>
      <Form agregarProducto={agregarProducto} />
      <Todo productos={productos} eliminarProducto={eliminarProducto} total={total} />
    </div>
  );
};

export default App;