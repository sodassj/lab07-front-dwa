// src/pages/RegisterPage.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './RegisterPage.css'; // Archivo CSS para personalización

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    role: "user"
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = "El nombre de usuario es requerido";
    } else if (formData.username.length < 4) {
      newErrors.username = "El usuario debe tener al menos 4 caracteres";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setServerError("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACK_URL}/api/auth/register`,
        {
          username: formData.username,
          password: formData.password,
          role: formData.role
        }
      );
      
      if (response.data.success) {
        navigate("/login", { state: { registrationSuccess: true } });
      }
    } catch (err) {
      console.error("Registration error:", err);
      setServerError(
        err.response?.data?.message || 
        "Hubo un error al registrar el usuario. Por favor intenta nuevamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card shadow-lg">
        <div className="register-header text-center mb-4">
          <h2 className="fw-bold mt-3">Crear Cuenta</h2>
          <p className="text-muted">Completa el formulario para registrarte</p>
        </div>

        {serverError && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {serverError}
            <button 
              type="button" 
              className="btn-close" 
              onClick={() => setServerError("")}
              aria-label="Close"
            ></button>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              <i className="bi bi-person-fill me-2"></i>
              Nombre de Usuario
            </label>
            <input
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Ingresa tu nombre de usuario"
              required
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <i className="bi bi-lock-fill me-2"></i>
              Contraseña
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Crea una contraseña segura"
              required
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
            <div className="form-text">
              La contraseña debe tener al menos 6 caracteres.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              <i className="bi bi-lock-fill me-2"></i>
              Confirmar Contraseña
            </label>
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Repite tu contraseña"
              required
            />
            {errors.confirmPassword && (
              <div className="invalid-feedback">{errors.confirmPassword}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="form-label">
              <i className="bi bi-person-badge-fill me-2"></i>
              Tipo de Cuenta
            </label>
            <select
              className="form-select"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="user">Usuario Regular</option>
              <option value="moderator">Moderador</option>
              <option value="admin">Administrador</option>
            </select>
            <div className="form-text">
              * Solo usuarios autorizados pueden crear cuentas de moderador o administrador
            </div>
          </div>

          <button 
            className="btn btn-primary w-100 py-2 mb-3" 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Registrando...
              </>
            ) : (
              <>
                <i className="bi bi-person-plus me-2"></i>
                Registrarse
              </>
            )}
          </button>

          <div className="text-center mt-4">
            <p className="text-muted mb-0">¿Ya tienes una cuenta?</p>
            <Link to="/" className="btn btn-outline-primary mt-2">
              <i className="bi bi-box-arrow-in-right me-1"></i>
              Iniciar Sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;