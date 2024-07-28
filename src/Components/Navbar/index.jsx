import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import './Navbar.css';
import DropdownMenu from '../DropdownMenu';

const Navbar = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <DropdownMenu />
      <nav className='navbar'>
        <ul className='nav-links'>
     
          <li>
            <NavLink to='/planes-y-Servicios' onClick={() => context.setSearchByCategory('Splanes-y-Servicios')}>
              Planes y Servicios
            </NavLink>
          </li>
          <li>
            <NavLink to='/SisprotTv' onClick={() => context.setSearchByCategory('SisprotTv')}>
              Sisprot Tv
            </NavLink>
          </li>
          <li>
            <NavLink to='/Instalacion' onClick={() => context.setSearchByCategory('Instalacion')}>
              Instalacion
            </NavLink>
          </li>
          <li>
            <NavLink to='/others' onClick={() => context.setSearchByCategory('others')}>
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
            <div className='cart-count'>{context.cartProducts.length}</div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
