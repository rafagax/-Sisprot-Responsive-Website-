import { useRoutes, BrowserRouter } from 'react-router-dom';

import Home from '../Home';

import MyOrders from '../MyOrders';
import NotFound from '../NotFound';

import Navbar from '../../Components/Navbar';

import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/planes-y-Servicios', element: <Home /> },
    { path: '/SisprotTv', element: <Home /> },
    { path: '/Instalacion', element: <Home /> },
    { path: '/orthers', element: <MyAccount /> },
    { path: '/my-orders', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
   
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      
      </BrowserRouter>

  );
};

export default App;
