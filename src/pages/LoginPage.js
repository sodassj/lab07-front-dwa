import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACK_URL}/api/auth/login`, {
        username,
        password
      });

      // Guardar el token, nombre de usuario y rol en el localStorage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      localStorage.setItem('role', res.data.role);

      // Verificar el rol con comparación estricta (===)
      const role = res.data.role;
      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else if (role === 'moderator') {
        navigate('/moderator/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    } catch (err) {
      alert(err.response?.data.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Usuario</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-success w-100">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
