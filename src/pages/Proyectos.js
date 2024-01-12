import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import '../css/styles.css';
import pibeImage from '../img/pibe2.png';
import iesImage from '../img/ies.png';

const Proyectos = () => {
  return (
    <div>
      <div className="proyecto">
        <h1>Mis proyectos son actualmente los de aquí abajo</h1>
      </div>

      <div className="b-container">
        <div className="s-box">
          <div className="s-b-img">
            <div className="s-type">Portafolio</div>
            {/* Utiliza Link en lugar de <a> para el enrutamiento interno */}
            <Link to="/">
              <img src={pibeImage} alt="Portafolio" />
            </Link>
          </div>
          <div className="s-b-text">
            <Link to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusamus
              debitis dolorum molestiae, nisi provident id sint rerum facilis ipsa?</Link>
          </div>
        </div>

        <div className="s-box">
          <div className="s-b-img">
            <div className="s-type">Fp superior</div>
            
            <Link to="/">
              <img src={iesImage} alt="Fp superior" />
            </Link>
          </div>
          <div className="s-b-text">
            <Link to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusamus debitis
              dolorum molestiae, nisi provident id sint rerum facilis ipsa?</Link>
          </div>
        </div>
      </div>

      <div className="secret">
        <div></div>
      </div>
    </div>
  );
};

export default Proyectos;
