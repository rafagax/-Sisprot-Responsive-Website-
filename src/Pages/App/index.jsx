import { useRoutes, BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import Instalacion from '../Instalacion'; 
import NotFound from '../NotFound';
import Navbar from '../../Components/Navbar';
import MisOrdenes from '../MisOrdenes';
import SisprotTv from '../SisprotTv';
import PlanesyServicios from '../PlanesyServicios';
import Modal from '../../Components/Modal';
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <PlanesyServicios /> },/*Homepage*/
    { path: '/SisprotTv', element: <SisprotTv /> },
    { path: '/Instalacion', element: <Instalacion /> },
    { path: '/PlanesyServicios', element: <PlanesyServicios /> },
    { path: '/MisOrdenes', element: <MisOrdenes /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  const [isModalVisible, setModalVisible] = useState(true);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Modal isVisible={isModalVisible} onClose={handleCloseModal} />
      {!isModalVisible && <AppRoutes />}
    </BrowserRouter>
  );
};

export default App;
