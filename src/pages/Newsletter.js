import React from 'react';
import '../css/styles.css';

const Newsletter = () => {
  return (
    <div>
      <h1>Página de Newsletter</h1>

      <section className="menunew">
        <div className="text-containernew">
          <h1>Mes de Enero</h1>
          <h2>Trabajando en un Portafolio!</h2>
        </div>
      </section>

      <div className="about-containernew">
        <div className="about-textnew">
          <p>Trabajo Mensual</p>
          <p>Marc Muñoz</p>
          <p>
            Este mes hemos trabajado en un proyecto de portafolio para nuestro cliente Antoni Morey Pasqual
          </p>
          <p>
            Dejaremos por aquí un enlace al <a href="./index.html"><b>proyecto</b></a> para que lo puedas seguir de cerca
          </p>
        </div>
      </div>

      <div className="secret">
        <div></div>
      </div>
    </div>
  );
};

export default Newsletter;
