
import Fotter from '../../Components/fotter';
import './planes-y-Servicios.css';



function PlanesYServicios() {
  return (
    <>
    <div className='planesyServicios-container'>
      <h1>Bienvenido a Sisprot Global Fiber</h1>
      <div className='planesyServicios-content'>
        <p>Sisprot Global Fiber se enorgullece de ofrecer una variedad de planes de internet de alta velocidad diseñados para satisfacer las necesidades de todos nuestros clientes. Nuestros planes de FTTH (Fiber to the Home) garantizan una conexión rápida y estable directamente en tu hogar, permitiéndote disfrutar de internet sin interrupciones.</p>
        <img src='residencial-home.webp' alt='Logo' className='residencial-home.webp-img' />
  
        <h2>Nuestros Planes</h2>
        <div className='plan'>
          <h3>Plan FTTH 150Mb</h3>
          <p><strong>$25 /Por mes</strong></p>
          <p>Internet asimétrico</p>
          <p>Consumo ilimitado mensual</p>
          <button>Contratar</button>
        </div>

        <div className='plan'>
          <h3>Plan FTTH 420Mb</h3>
          <p><strong>$32 /Por mes</strong></p>
          <p>Internet asimétrico</p>
          <p>Consumo ilimitado mensual</p>
          <button>Contratar</button>
        </div>

        <div className='plan'>
          <h3>Plan FTTH 450Mb</h3>
          <p><strong>$35 /Por mes</strong></p>
          <p>Internet asimétrico</p>
          <p>Consumo ilimitado mensual</p>
          <button>Contratar</button>
        </div>

        <p>Todos nuestros planes están diseñados para ofrecer la mejor experiencia de internet posible. No importa cuál elijas, puedes contar con una conexión rápida, confiable y sin límites. Contrata hoy mismo el plan que mejor se adapte a tus necesidades y descubre la diferencia de navegar con Sisprot Global Fiber.</p>
      </div>
    </div>
    <Fotter/>
</>
  );
}

export default PlanesYServicios;
