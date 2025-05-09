import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Archivo CSS adicional para personalización

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('username');
    const userRole = localStorage.getItem('role');
    
    if (!token) {
      navigate('/login');
    } else {
      setUsername(user);
      setRole(userRole);
      // Simulando carga de datos
      setTimeout(() => setLoading(false), 1000);
    }
  }, [navigate]);

  if (loading) {
    return (
      <div className="dashboard-loading text-center py-5">
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <h4 className="mt-3">Cargando tu dashboard...</h4>
      </div>
    );
  }

  return (
    <div className="dashboard-container container-fluid py-4">
      <div className="row mb-4">
        <div className="col">
          <div className="welcome-card bg-primary text-white p-4 rounded-3 shadow">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="fw-bold mb-1">Bienvenido, {username}!</h1>
                <p className="mb-0 opacity-75">
                  <i className="bi bi-person-badge me-1"></i>
                  {role === 'admin' ? 'Administrador' : 
                   role === 'moderador' ? 'Moderador' : 'Usuario'}
                </p>
              </div>
              <div className="avatar-lg bg-white text-primary rounded-circle d-flex align-items-center justify-content-center">
                {username.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Tarjeta de Acciones Rápidas */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white border-0">
              <h5 className="mb-0">
                <i className="bi bi-lightning-charge-fill text-warning me-2"></i>
                Acciones Rápidas
              </h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <button className="btn btn-action-card w-100 h-100 py-3">
                    <i className="bi bi-calendar-check fs-2 mb-2"></i>
                    <h6>Mis Eventos</h6>
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-action-card w-100 h-100 py-3">
                    <i className="bi bi-file-earmark-text fs-2 mb-2"></i>
                    <h6>Documentos</h6>
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-action-card w-100 h-100 py-3">
                    <i className="bi bi-people fs-2 mb-2"></i>
                    <h6>Contactos</h6>
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-action-card w-100 h-100 py-3">
                    <i className="bi bi-gear fs-2 mb-2"></i>
                    <h6>Configuración</h6>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjeta de Actividad Reciente */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white border-0">
              <h5 className="mb-0">
                <i className="bi bi-clock-history text-info me-2"></i>
                Actividad Reciente
              </h5>
            </div>
            <div className="card-body">
              <div className="activity-timeline">
                <div className="activity-item">
                  <div className="activity-badge bg-success"></div>
                  <div className="activity-content">
                    <small className="text-muted">Hace 15 minutos</small>
                    <p className="mb-0">Has iniciado sesión correctamente</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-badge bg-primary"></div>
                  <div className="activity-content">
                    <small className="text-muted">Ayer, 14:32</small>
                    <p className="mb-0">Actualizaste tu información de perfil</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-badge bg-warning"></div>
                  <div className="activity-content">
                    <small className="text-muted">Lunes, 09:15</small>
                    <p className="mb-0">Subiste un nuevo documento</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-badge bg-info"></div>
                  <div className="activity-content">
                    <small className="text-muted">28 Feb, 2024</small>
                    <p className="mb-0">Registro completado</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-outline-secondary mt-3">
                Ver toda la actividad
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Estadísticas (ejemplo) */}
      <div className="row mt-2">
        <div className="col">
          <div className="card shadow-sm">
            <div className="card-header bg-white border-0">
              <h5 className="mb-0">
                <i className="bi bi-bar-chart-line-fill text-success me-2"></i>
                Tus Estadísticas
              </h5>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-md-3 mb-3 mb-md-0">
                  <h3 className="text-primary">12</h3>
                  <p className="text-muted mb-0">Eventos</p>
                </div>
                <div className="col-md-3 mb-3 mb-md-0">
                  <h3 className="text-success">5</h3>
                  <p className="text-muted mb-0">Tareas completadas</p>
                </div>
                <div className="col-md-3 mb-3 mb-md-0">
                  <h3 className="text-warning">3</h3>
                  <p className="text-muted mb-0">Mensajes nuevos</p>
                </div>
                <div className="col-md-3">
                  <h3 className="text-info">8</h3>
                  <p className="text-muted mb-0">Documentos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;