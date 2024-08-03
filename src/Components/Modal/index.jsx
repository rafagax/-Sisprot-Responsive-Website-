// src/components/Modal.jsx
import React from 'react';
import './Modal.css';

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src='/Concurso.png' alt='Concurso' className='' />
        <button className="modal-close" onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default Modal;
