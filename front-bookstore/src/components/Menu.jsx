import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Bookstore
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse accordion-flush`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavCollapse}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Autores" className="nav-link" onClick={handleNavCollapse}>
                Autores
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Editoras" className="nav-link" onClick={handleNavCollapse} >
                Editoras
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Livros" className="nav-link" onClick={handleNavCollapse} >
                Livros
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
