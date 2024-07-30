import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Fotter.css';

const Fotter = () => {
  
  return (
<div className="footer">
  <p>2024, Sisprot Global Fiber. Todos los derechos reservados.</p>
  <div className="social-icons">
    <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
    <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
    <a href="#"><img src="twitter.png" alt="Twitter" /></a>
    <a href="#"><img src="youtub.png" alt="YouTube" /></a>
  </div>
  <div className="contact-container">
      <div className="contact">
        <a href="#"><img src="whasap.png" alt="whatsapp" /></a>
        
      </div>
 
 
     
    </div>
    
</div>

  );
}

export default Fotter;
