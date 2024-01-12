import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import '../css/styles.css';
import pibeImage from '../img/pibe.png';
import desarrolloWebImage from '../img/diseño web.png';
import diseñoWebImage from '../img/Recurso-15.png';

const Home = () => {
  return (
    <div>
      <section className="menu2">
        <div className="text-container">
          <h1>Yo soy Marc</h1>
          <h2>Profesional de diseño web</h2>
          <div className="botones">
            <button className="boton">Ver mi cv</button>
            {/* Utiliza Link en lugar de <a> para el enrutamiento interno */}
            <Link to="/proyectos">
              <button className="boton3">Ver mis proyectos</button>
            </Link>
          </div>
          <img className="imagens" src={pibeImage} alt="Imagen Pibe" />
        </div>
      </section>

      <div className="about-container">
        <div className="about-text">
          <p>Sobre mi</p>
          <p>Diseñador</p>
          <p>
            Hola, mi nombre es Marc. Soy Designer. Si tienes algún Proyecto. Lo hago lo antes posible. Te gustará
            mucho mi trabajo, si no lo hace lo cambio hasta que te guste.
          </p>
          <p>
            Soy diseñador. Si tienes algún proyecto para tu negocio contacta conmigo. Realizo tu proyecto lo antes
            posible.
          </p>
        </div>
      </div>

      <section id="services">
        <div className="s-heading">
          <h1 style={{ color: 'black' }}>Servicios</h1>
        </div>
        <div className="b-container">
          <div className="s-box">
            <div className="s-b-img">
              <div className="s-type">Desarrollo Web</div>
              <img src={desarrolloWebImage} alt="Desarrollo Web" />
            </div>
            <div className="s-b-text">
              <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusamus debitis
                dolorum molestiae, nisi provident id sint rerum facilis ipsa?</a>
            </div>
          </div>

          <div className="s-box">
            <div className="s-b-img">
              <div className="s-type">Diseño Web</div>
              <img src={diseñoWebImage} alt="Diseño Web" />
            </div>
            <div className="s-b-text">
              <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusamus debitis
                dolorum molestiae, nisi provident id sint rerum facilis ipsa?</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
