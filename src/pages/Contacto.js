// src/pages/Contacto.js
import React from 'react';
import '../css/styles.css';

const Contacto = () => {
  return (
    <div>
      {/* Section: Contact-btn */}
      <section id="contact-btn">
        <h1 className="c-b-heading">Pagina de contacto</h1>
        <p className="c-b-heading">Registrate para poder mandarte informacion nuestra y que tambien nos puedas contactar!
          <br /> Si quieres contactarnos para algun trabajo este es nuestro correo mms02@iesemilidarder.com</p>
      </section>

      {/* Section: Contact-form */}
      <section id="contact-form">
        <form>
          <div className="contact-left">
            <h1 className="c-l-heading">Registrate!</h1>
            <div className="f-name">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" placeholder="Nombre completo" />
            </div>
            <div className="f-email">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Ejemplo@gmail.com" />
            </div>
            <div className="contact-right">
              <button type="submit" className="new">Submit</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contacto;
