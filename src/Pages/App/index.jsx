import { useRoutes, BrowserRouter } from 'react-router-dom';
import PlanesYServicios from '../PlanesYServicios'; // Asegúrate de que la ruta sea correcta
import NotFound from '../NotFound';
import Navbar from '../../Components/Navbar';
import MisOrdenes from '../MisOrdenes';
import Fotter from '../../Components/Fotter';
import './App.css';


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <PlanesYServicios /> },
    { path: '/PlanesyServicios', element: <PlanesYServicios /> },
    { path: '/SisprotTv', element: <PlanesYServicios /> },
    { path: '/Instalacion', element: <PlanesYServicios /> },
    { path: '/Otros', element: <PlanesYServicios /> },
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
