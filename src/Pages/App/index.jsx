import { useRoutes, BrowserRouter } from 'react-router-dom';

import Instalacion from '../Instalacion'; // Asegúrate de que la ruta sea correcta
import NotFound from '../NotFound';
import Navbar from '../../Components/Navbar';
import MisOrdenes from '../MisOrdenes';
import SisprotTv from '../SisprotTv';
import Otros from '../Otros';
import './App.css';
import PlanesyServicios from '../PlanesyServicios';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <PlanesyServicios /> },
    { path: '/PlanesyServicios', element: <PlanesyServicios /> },
    { path: '/SisprotTv', element: <SisprotTv /> },
    { path: '/Instalacion', element: <Instalacion /> },
    { path: '/Otros', element: <Otros /> },
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
