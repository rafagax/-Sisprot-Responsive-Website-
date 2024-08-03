import { useRoutes, BrowserRouter } from 'react-router-dom';

import Instalacion from '../Instalacion'; // Asegúrate de que la ruta sea correcta
import NotFound from '../NotFound';
import Navbar from '../../Components/Navbar';
import MisOrdenes from '../MisOrdenes';
import SisprotTv from '../SisprotTv';
import PlanesyServicios from '../PlanesyServicios';
import './App.css';


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <PlanesyServicios /> },

    { path: '/SisprotTv', element: <SisprotTv /> },
    { path: '/Instalacion', element: <Instalacion /> },
    { path: '/PlanesyServicios', element: <PlanesyServicios /> },
    { path: '/MisOrdenes', element: <MisOrdenes /> },
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
