import React from 'react';

const Modal = ({ language, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>X</button>
        <h2>{language.name}</h2>
        <img src={language.image} alt={language.name} />
        <p>{language.description}</p>
      </div>
    </div>
  );
};

export default Modal;
