import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Bookstore
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse accordion-flush" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Autores" className="nav-link">
                Autores
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Editoras" className="nav-link">
                Editoras
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Livros" className="nav-link">
                Livros
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
