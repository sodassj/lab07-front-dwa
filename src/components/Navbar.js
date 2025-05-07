// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Limpiar el localStorage
    navigate('/'); // Redirigir al login
  };

  // Obtener el rol del usuario desde localStorage
  const role = localStorage.getItem('role');
  const username = localStorage.getItem('username');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Mi Aplicación
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {role === 'admin' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/dashboard">
                    Dashboard Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Registrar Usuario
                  </Link>
                </li>
              </>
            )}
            {role === 'moderador' && (
              <li className="nav-item">
                <Link className="nav-link" to="/moderator/dashboard">
                  Dashboard Moderador
                </Link>
              </li>
            )}
            {role === 'usuario' && (
              <li className="nav-item">
                <Link className="nav-link" to="/user/dashboard">
                  Dashboard Usuario
                </Link>
              </li>
            )}

            {username && (
              <li className="nav-item">
                <span className="nav-link">Bienvenido, {username}</span>
              </li>
            )}

            <li className="nav-item d-flex align-items-center">
              {username ? (
                <button className="btn btn-danger" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              ) : (
                <>
                  <Link className="btn btn-primary me-2" to="/">
                    Iniciar Sesión
                  </Link>
                  <Link className="btn btn-outline-primary" to="/register">
                    Registrarse
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
