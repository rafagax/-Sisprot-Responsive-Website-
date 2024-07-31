import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className='pfotter'>2024, Sisprot Global Fiber. Todos los derechos reservados.</p>
        <p className='pfotter'>Pg web desarrollada por Ing. Jesús-Vasquez</p>
        <div className="social-icons">
          <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
          <a href="#"><img src="twitter.png" alt="Twitter" /></a>
          <a href="#"><img src="youtub.png" alt="YouTube" /></a>
        </div>
        <a href="https://api.whatsapp.com/send/?phone=584243076327&text&type=phone_number&app_absent=0" className="contact-link">
          <div className="contact-container">
            <p className='cuadrowhasap'>whatsapp +58 0424-3076327</p>
            <div className="contact">
              <img src="whasap.png" alt="whatsapp" />
              <p>Contáctanos</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Footer;
