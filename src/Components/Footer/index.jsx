import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer">
        
          <img src='/logo_sgf.png' alt='Logo' className='logo-Footer' />
          <p>Corporación Sisprot Global Fiber, C.A., destacada empresa de telecomunicaciones en Santiago Mariño, ofrece servicios de internet de alta velocidad para hogares, PYMEs, empresas e ISPs.</p>
       
          <h5 className='H2-Footer'>Dirección</h5>
          <p>Calle Mariño, CC Paseo Mariño, Nivel PB-09, Local PB-09, Centro Turmero, Aragua</p>
          <section className='sectionfooter' >   
          <h5 className='H2-Footer'>Horarios de atención al cliente:</h5>
          <h5>Atención por oficina</h5>
          <p>Lunes - Viernes: 8:00 a.m. - 5:00 p.m.</p>
          <p>Sábados: 8:00 a.m. - 1:00 p.m.</p>
          <h5>Atención por call center</h5>
          <p>Lunes - Domingo: 8:00 a.m. - 11:59 p.m.</p>
        </section>
        <section className='sectionfooter' > 
          <h4 className='pfotter'>© 2024, Sisprot Global Fiber. Todos los derechos reservados.</h4>
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
        </section>
      </div>
    </>
  );
}

export default Footer;
