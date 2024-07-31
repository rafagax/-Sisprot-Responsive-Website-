import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Fotter.css';

const Fotter = () => {
  
  return (
<div className="footer">
  <p className='pfotter'>2024, Sisprot Global Fiber. Todos los derechos reservados.</p>
  <div className="social-icons">
    <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
    <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
    <a href="#"><img src="twitter.png" alt="Twitter" /></a>
    <a href="#"><img src="youtub.png" alt="YouTube" /></a>
  </div>

  
  <div className="contact-container">
  <p className='cuadrowhasap'>whatsapp +58 0424-3076327 </p>
      <div className="contact">
        <a href="#"><img src="whasap.png" alt="whatsapp" /></a>
        <p>Contactanos </p>
        
      </div>
 
    </div>
    
</div>

  );
}

export default Fotter;
