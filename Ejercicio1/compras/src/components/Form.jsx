import React, { useState } from 'react';
import styles from '../app/page.module.css';

const Form = ({ agregarProducto }) => {
  const [producto, setProducto] = useState({ nombre: '', marca: '', cantidad: 1, precio: 0 });

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!producto.nombre || !producto.marca || producto.cantidad <= 0 || producto.precio <= 0) {
      alert('Todos los campos deben ser válidos');
      return;
    }
    agregarProducto(producto);
    setProducto({ nombre: '', marca: '', cantidad: 1, precio: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.App}>
      <input type="text" name="nombre" placeholder="Nombre" value={producto.nombre} onChange={handleChange} className={styles.form_input} required />
      <input type="text" name="marca" placeholder="Marca" value={producto.marca} onChange={handleChange} className={styles.form_input} required />
      <input type="number" name="cantidad" placeholder="Cantidad" value={producto.cantidad} onChange={handleChange} className={styles.form_input} min="1" required />
      <input type="number" name="precio" placeholder="Precio" value={producto.precio} onChange={handleChange} className={styles.form_input} min="0.01" step="0.01" required />
      <button type="submit" className={styles.form_button}>Agregar Producto</button>
    </form>
  );
};

export default Form;