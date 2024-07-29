
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

import './Navbar.css';
import DropdownMenu from '../DropdownMenu';

const Navbar = () => {


  return (
    <>
      <DropdownMenu />
      <nav className='navbar'>
        <ul className='nav-links'>
     
          <li>
            <NavLink to='/planes-y-Servicios' >
              Planes y Servicios
            </NavLink>
          </li>
          <li>
            <NavLink to='/SisprotTv' >
              Sisprot Tv
            </NavLink>
          </li>
          <li>
            <NavLink to='/Instalacion'>
              Instalacion
            </NavLink>
          </li>
          <li>
            <NavLink to='/others'>
              Otros
            </NavLink>
          </li>
        </ul>
        <ul className='nav-actions'>
          <li className='email'>
            Sisprot Global Fiber
          </li>
          <li className='nav-orders'>
            <NavLink to='/my-orders'>
              My Orders
            </NavLink>
          </li>
          <li className='cart'>
            <ShoppingBagIcon className='cart-icon'></ShoppingBagIcon>
            <div className='cart-count'> </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
