import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">Digital Evolution S.A</Link>

        {/* Aquí puedes agregar la clase 'toggle' y las listas de menú como en tu estructura */}
        <div className="toggle"></div>

        <ul className="menu">
          <li className="active"><Link to="/">Inicio</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/newsletter">Newsletter</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>

        <div className="menu3">
          <a href=""><i className="fa-solid fa-bars"></i></a>
          <div className="submenu">
            <Link to="/">Inicio</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/newsletter">Newsletter</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
