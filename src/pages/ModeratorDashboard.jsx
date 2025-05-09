// src/pages/ModeratorDashboard.jsx
import React from 'react';
import './ModeratorDashboard.css'; // Archivo CSS adicional para personalización

const ModeratorDashboard = () => (
  <div className="moderator-dashboard container-fluid py-4">
    <div className="row mb-4">
      <div className="col">
        <div className="d-flex align-items-center">
          <i className="bi bi-shield-check fs-1 text-primary me-3"></i>
          <div>
            <h1 className="fw-bold mb-0">Panel de Moderador</h1>
            <p className="text-muted">Herramientas y funciones disponibles para moderadores</p>
          </div>
        </div>
        <hr className="mt-3" />
      </div>
    </div>

    <div className="row g-4 mb-4">
      {/* Tarjeta 1: Rol del Moderador */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-primary">
          <div className="card-header bg-primary text-white">
            <h5 className="mb-0">
              <i className="bi bi-info-circle me-2"></i>
              Tu Rol
            </h5>
          </div>
          <div className="card-body">
            <p className="card-text">
              Como <strong>Moderador</strong>, tienes responsabilidades intermedias entre los usuarios 
              regulares y los administradores. Tu función principal es mantener la calidad y el orden 
              dentro de la plataforma.
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Supervisión de contenido
              </li>
              <li className="list-group-item">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Resolución de reportes
              </li>
              <li className="list-group-item">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Asistencia a usuarios
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tarjeta 2: Funciones sobre Usuarios */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-warning">
          <div className="card-header bg-warning text-dark">
            <h5 className="mb-0">
              <i className="bi bi-people-fill me-2"></i>
              Gestión de Usuarios
            </h5>
          </div>
          <div className="card-body">
            <p className="card-text">
              Tienes capacidades limitadas para gestionar usuarios dentro del sistema:
            </p>
            <div className="alert alert-secondary py-2">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              <strong>Acciones disponibles:</strong>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="bi bi-person-check me-2 text-primary"></i>
                Verificar cuentas de usuarios
              </li>
              <li className="list-group-item">
                <i className="bi bi-chat-left-text me-2 text-primary"></i>
                Enviar advertencias
              </li>
              <li className="list-group-item">
                <i className="bi bi-eye me-2 text-primary"></i>
                Supervisar actividad
              </li>
              <li className="list-group-item">
                <i className="bi bi-flag me-2 text-primary"></i>
                Reportar usuarios problemáticos
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tarjeta 3: Herramientas de Moderación */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-success">
          <div className="card-header bg-success text-white">
            <h5 className="mb-0">
              <i className="bi bi-tools me-2"></i>
              Herramientas
            </h5>
          </div>
          <div className="card-body">
            <p className="card-text">
              Acceso rápido a las principales herramientas de moderación:
            </p>
            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary text-start">
                <i className="bi bi-list-check me-2"></i>
                Panel de Reportes
              </button>
              <button className="btn btn-outline-primary text-start">
                <i className="bi bi-chat-square-text me-2"></i>
                Moderación de Comentarios
              </button>
              <button className="btn btn-outline-primary text-start">
                <i className="bi bi-file-earmark-text me-2"></i>
                Revisión de Contenido
              </button>
              <button className="btn btn-outline-primary text-start">
                <i className="bi bi-graph-up me-2"></i>
                Estadísticas de Actividad
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Sección de Actividad Reciente */}
    <div className="row">
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-header bg-white">
            <h5 className="mb-0">
              <i className="bi bi-clock-history me-2"></i>
              Actividad Reciente Requiere Atención
            </h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Usuario</th>
                    <th>Detalle</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1254</td>
                    <td><span className="badge bg-warning">Comentario</span></td>
                    <td>usuario23</td>
                    <td>Lenguaje inapropiado</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-1">
                        Revisar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#1253</td>
                    <td><span className="badge bg-danger">Reporte</span></td>
                    <td>usuario45</td>
                    <td>Contenido duplicado</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-1">
                        Revisar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#1252</td>
                    <td><span className="badge bg-info">Solicitud</span></td>
                    <td>usuario12</td>
                    <td>Verificación de cuenta</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-1">
                        Revisar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-end">
              <button className="btn btn-primary">
                <i className="bi bi-arrow-right-circle me-1"></i>
                Ver todos los reportes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ModeratorDashboard;