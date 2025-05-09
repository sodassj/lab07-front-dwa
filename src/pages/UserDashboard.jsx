// src/pages/UserDashboard.jsx
import React from 'react';
import './UserDashboard.css'; // Archivo CSS adicional para personalización

const UserDashboard = () => (
  <div className="user-dashboard container-fluid py-4">
    <div className="row mb-4">
      <div className="col">
        <div className="d-flex align-items-center">
          <i className="bi bi-person-circle fs-1 text-primary me-3"></i>
          <div>
            <h1 className="fw-bold mb-0">Mi Panel de Usuario</h1>
            <p className="text-muted">Bienvenido a tu área personal</p>
          </div>
        </div>
        <hr className="mt-3" />
      </div>
    </div>

    <div className="row g-4 mb-4">
      {/* Tarjeta 1: Resumen de Cuenta */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-primary">
          <div className="card-header bg-primary text-white">
            <h5 className="mb-0">
              <i className="bi bi-person-badge me-2"></i>
              Mi Cuenta
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center mb-3">
              <div className="avatar-lg bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center">
                <i className="bi bi-person fs-4"></i>
              </div>
              <h5 className="mt-3 mb-1">Usuario Registrado</h5>
              <p className="text-muted small">Miembro desde: Enero 2023</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>
                  <i className="bi bi-envelope me-2 text-primary"></i>
                  Email verificado
                </span>
                <i className="bi bi-check-circle-fill text-success"></i>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>
                  <i className="bi bi-shield-check me-2 text-primary"></i>
                  Seguridad
                </span>
                <span className="badge bg-success">Activa</span>
              </li>
              <li className="list-group-item">
                <button className="btn btn-outline-primary w-100">
                  <i className="bi bi-pencil-square me-1"></i>
                  Editar perfil
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tarjeta 2: Estadísticas Rápidas */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-info">
          <div className="card-header bg-info text-white">
            <h5 className="mb-0">
              <i className="bi bi-graph-up me-2"></i>
              Mi Actividad
            </h5>
          </div>
          <div className="card-body">
            <div className="row text-center mb-3">
              <div className="col-6 border-end">
                <h3 className="text-primary">24</h3>
                <p className="text-muted small mb-0">Contribuciones</p>
              </div>
              <div className="col-6">
                <h3 className="text-success">5</h3>
                <p className="text-muted small mb-0">Amigos</p>
              </div>
            </div>
            <div className="progress mb-2" style={{height: '8px'}}>
              <div 
                className="progress-bar bg-primary" 
                role="progressbar" 
                style={{width: '75%'}}
                aria-valuenow="75" 
                aria-valuemin="0" 
                aria-valuemax="100"
              ></div>
            </div>
            <p className="small text-muted mb-3">Completaste el 75% de tu perfil</p>
            
            <div className="alert alert-secondary py-2">
              <i className="bi bi-star-fill text-warning me-2"></i>
              <strong>Nivel:</strong> Usuario Activo
            </div>
          </div>
        </div>
      </div>

      {/* Tarjeta 3: Acciones Rápidas */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-success">
          <div className="card-header bg-success text-white">
            <h5 className="mb-0">
              <i className="bi bi-lightning-charge me-2"></i>
              Acciones Rápidas
            </h5>
          </div>
          <div className="card-body">
            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary text-start">
                <i className="bi bi-plus-circle me-2"></i>
                Crear nuevo contenido
              </button>
              <button className="btn btn-outline-primary text-start">
                <i className="bi bi-people me-2"></i>
                Invitar amigos
              </button>
              <button className="btn btn-outline-primary text-start">
                <i className="bi bi-gear me-2"></i>
                Configuración
              </button>
              <button className="btn btn-outline-primary text-start">
                <i className="bi bi-question-circle me-2"></i>
                Ayuda y soporte
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Sección de Contenido Reciente */}
    <div className="row">
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-header bg-white">
            <h5 className="mb-0">
              <i className="bi bi-clock-history me-2"></i>
              Tu Actividad Reciente
            </h5>
          </div>
          <div className="card-body">
            <div className="activity-feed">
              <div className="activity-item">
                <div className="activity-icon bg-primary text-white">
                  <i className="bi bi-file-earmark-text"></i>
                </div>
                <div className="activity-content">
                  <small className="text-muted">Hoy, 10:30 AM</small>
                  <p className="mb-0">Publicaste un nuevo artículo</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon bg-success text-white">
                  <i className="bi bi-chat-left-text"></i>
                </div>
                <div className="activity-content">
                  <small className="text-muted">Ayer, 4:15 PM</small>
                  <p className="mb-0">Comentaste en una publicación</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon bg-info text-white">
                  <i className="bi bi-person-plus"></i>
                </div>
                <div className="activity-content">
                  <small className="text-muted">Ayer, 11:20 AM</small>
                  <p className="mb-0">Agregaste un nuevo amigo</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-3">
              <button className="btn btn-outline-secondary">
                <i className="bi bi-arrow-repeat me-1"></i>
                Ver toda mi actividad
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UserDashboard;