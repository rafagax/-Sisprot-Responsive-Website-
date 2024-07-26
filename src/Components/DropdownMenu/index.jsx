import React, { useState } from "react";
import "./DropdownMenu.css";
import { NavLink } from "react-router-dom";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleDropdown} className="dropdown-button">
        <span className="menu-icon">&#9776;</span> Menu
      </button>
      {isOpen && (
        <ul className="dropdown-content">
          <li>
            <NavLink to="/All" className="dropdown-link">
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/Planes" className="dropdown-link">
              Planes
            </NavLink>
          </li>
          <li>
            <NavLink to="/Servicios" className="dropdown-link">
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink to="/Instalacion" className="dropdown-link">
              Instalacion
            </NavLink>
          </li>
          <li>
            <NavLink to="/Sisprot-Tv" className="dropdown-link">
              Sisprot-Tv
            </NavLink>
          </li>
          <li>
            <NavLink to="/Otros" className="dropdown-link">
              Otros
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
