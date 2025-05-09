import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css'; // Archivo CSS adicional para personalización

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACK_URL}/api/auth/login`, {
        username,
        password
      });

      // Guardar el token, nombre de usuario y rol en el localStorage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      localStorage.setItem('role', res.data.role);

      // Redirección basada en el rol
      const role = res.data.role;
      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else if (role === 'moderator') {
        navigate('/moderator/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    } catch (err) {
      setError(err.response?.data.message || 'Error al iniciar sesión');
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card shadow-lg">
        <div className="login-header text-center mb-4">
          <h2 className="fw-bold mt-3">Iniciar Sesión</h2>
          <p className="text-muted">Ingresa tus credenciales para acceder al sistema</p>
        </div>

        {error && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {error}
            <button 
              type="button" 
              className="btn-close" 
              onClick={() => setError('')}
              aria-label="Close"
            ></button>
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              <i className="bi bi-person-fill me-2"></i>
              Nombre de Usuario
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-person"></i>
              </span>
              <input
                id="username"
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu usuario"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              <i className="bi bi-key-fill me-2"></i>
              Contraseña
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <input
                id="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
          </div>

          <button 
            className="btn btn-primary w-100 py-2 mb-3" 
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Cargando...
              </>
            ) : (
              <>
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Iniciar Sesión
              </>
            )}
          </button>

          <div className="text-center mt-4">
            <p className="text-muted mb-0">¿No tienes una cuenta?</p>
            <Link to="/register" className="btn btn-outline-primary mt-2">
              <i className="bi bi-person-plus me-1"></i>
              Regístrate aquí
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;