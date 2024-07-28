import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './DropdownMenu.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleDropdown} className='dropdown-button'>
        Menu
      </button>
      <ul className='dropdown-content'>
        <li><NavLink to='/planes-y-Servicios' className='dropdown-link'>Planes y Servicios</NavLink></li>
        <li><NavLink to='/SisprotTv' className='dropdown-link'>Sisprot Tv</NavLink></li>
        <li><NavLink to='/Instalacion' className='dropdown-link'>Instalacion</NavLink></li>
        <li><NavLink to='/others' className='dropdown-link'>Otros</NavLink></li>
        <li><NavLink to='/my-orders' className='dropdown-link'>Mis Ordenes</NavLink></li>
        <li><NavLink to='/All' className='dropdown-link'>All</NavLink></li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
