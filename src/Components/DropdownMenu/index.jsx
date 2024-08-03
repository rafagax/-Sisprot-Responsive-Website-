import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './DropdownMenu.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleDropdown} className='dropdown-button'>
        Menu
      </button>
      <ul className='dropdown-content'>
      
        <li><NavLink to='/SisprotTv' className='dropdown-link'>Sisprot Tv</NavLink></li>
       <li><NavLink to='/Instalacion' className='dropdown-link'>Instalacion</NavLink></li>
       <li><NavLink to='/PlanesyServicios' className='dropdown-link'>Planes y Servicios</NavLink></li>
       <li><NavLink to='/MisOrdenes' className='dropdown-link'>Mis Ordenes</NavLink></li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
