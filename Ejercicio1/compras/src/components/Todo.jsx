import React from 'react';
import styles from '../app/page.module.css';

const Todo = ({ productos, eliminarProducto, editarProducto, total }) => {
  return (
    <div className={styles.main}>
      <h2 className={styles.Titulo3}>Lista de Compras</h2>
      <table className={styles.App}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.nombre}</td>
              <td>{producto.marca}</td>
              <td>{producto.cantidad}</td>
              <td>${producto.precio}</td>
              <td>
                <button className={styles.form_button} onClick={() => editarProducto(index)}>Editar</button>
                <button className={styles.btn_delete} onClick={() => eliminarProducto(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Todo;