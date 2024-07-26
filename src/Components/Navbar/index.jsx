import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import './Navbar.css'; // Importar el archivo CSS
import DropdownMenu from '../DropdownMenu';

const Navbar = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <DropdownMenu />
      <nav className='navbar'>
        <ul className='nav-links'>
        
          <li>
            <NavLink to="/all"onClick={() => context.setSearchByCategory('all')}>
              All
            </NavLink>
          </li>
          
          <li>
            <NavLink to='/clothes' onClick={() => context.setSearchByCategory('clothes')}>
              Planes
            </NavLink>
          </li>
          <li>
            <NavLink to='/electronics' onClick={() => context.setSearchByCategory('electronics')}>
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink to='/furnitures' onClick={() => context.setSearchByCategory('furnitures')}>
              Sisprot Tv
            </NavLink>
          </li>
          <li>
            <NavLink to='/toys' onClick={() => context.setSearchByCategory('toys')}>
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
