// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import './AdminDashboard.css'; // Archivo CSS para personalización

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user"))?.token;
        const response = await axios.get(`${process.env.REACT_APP_BACK_URL}/api/admin/dashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data);
      } catch (err) {
        console.error("Error fetching dashboard data", err);
        setError("Error al cargar los datos del dashboard");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Datos de ejemplo (simulados para el diseño)
  const sampleData = {
    totalUsers: 1243,
    activeToday: 842,
    newRegistrations: 28,
    adminCount: 5,
    recentActivity: [
      { username: "admin1", role: "admin", action: "Actualizó configuración del sistema", timestamp: "2023-05-15T10:30:00Z" },
      { username: "user45", role: "usuario", action: "Registro completado", timestamp: "2023-05-15T09:15:00Z" },
      { username: "mod2", role: "moderador", action: "Eliminó contenido inapropiado", timestamp: "2023-05-14T16:45:00Z" }
    ]
  };

  return (
    <div className="admin-dashboard container-fluid py-4">
      {/* Encabezado */}
      <div className="row mb-4">
        <div className="col">
          <div className="d-flex align-items-center">
            <i className="bi bi-shield-lock fs-1 text-danger me-3"></i>
            <div>
              <h1 className="fw-bold mb-0">Panel de Administración</h1>
              <p className="text-muted">Control total del sistema y usuarios</p>
            </div>
          </div>
          <hr className="mt-3 border-danger opacity-25" />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-danger" role="status" style={{width: '3rem', height: '3rem'}}>
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3 fs-5">Cargando datos administrativos...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger">
          <i className="bi bi-exclamation-octagon-fill me-2"></i>
          {error}
        </div>
      ) : (
        <>
          {/* Estadísticas Principales */}
          <div className="row mb-4">
            <div className="col-md-3 mb-3">
              <div className="card stat-card bg-danger bg-opacity-10 border-danger">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="card-subtitle text-danger">Usuarios Totales</h6>
                      <h2 className="card-title mb-0">{data?.totalUsers || sampleData.totalUsers}</h2>
                      <small className="text-muted">+12% este mes</small>
                    </div>
                    <i className="bi bi-people-fill fs-1 text-danger opacity-25"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card stat-card bg-success bg-opacity-10 border-success">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="card-subtitle text-success">Activos Hoy</h6>
                      <h2 className="card-title mb-0">{data?.activeToday || sampleData.activeToday}</h2>
                      <small className="text-muted">+8% desde ayer</small>
                    </div>
                    <i className="bi bi-activity fs-1 text-success opacity-25"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card stat-card bg-primary bg-opacity-10 border-primary">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="card-subtitle text-primary">Nuevos Registros</h6>
                      <h2 className="card-title mb-0">{data?.newRegistrations || sampleData.newRegistrations}</h2>
                      <small className="text-muted">+3 en la última hora</small>
                    </div>
                    <i className="bi bi-person-plus fs-1 text-primary opacity-25"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card stat-card bg-warning bg-opacity-10 border-warning">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="card-subtitle text-warning">Administradores</h6>
                      <h2 className="card-title mb-0">{data?.adminCount || sampleData.adminCount}</h2>
                      <small className="text-muted">Acceso completo</small>
                    </div>
                    <i className="bi bi-shield-check fs-1 text-warning opacity-25"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido Principal */}
          <div className="row">
            {/* Tabla de Actividad Reciente */}
            <div className="col-lg-8 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-header bg-white border-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">
                      <i className="bi bi-list-check text-danger me-2"></i>
                      Actividad Reciente
                    </h5>
                    <button className="btn btn-sm btn-outline-danger">
                      <i className="bi bi-arrow-clockwise"></i> Actualizar
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>Usuario</th>
                          <th>Rol</th>
                          <th>Acción</th>
                          <th>Fecha/Hora</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(data?.recentActivity || sampleData.recentActivity).map((activity, index) => (
                          <tr key={index}>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="avatar-sm bg-secondary bg-opacity-10 text-secondary rounded-circle me-2">
                                  {activity.username.charAt(0).toUpperCase()}
                                </span>
                                {activity.username}
                              </div>
                            </td>
                            <td>
                              <span className={`badge bg-${
                                activity.role === 'admin' ? 'danger' : 
                                activity.role === 'moderador' ? 'warning' : 'primary'
                              }`}>
                                {activity.role}
                              </span>
                            </td>
                            <td>{activity.action}</td>
                            <td>{new Date(activity.timestamp).toLocaleString()}</td>
                            <td>
                              <button className="btn btn-sm btn-outline-secondary">
                                <i className="bi bi-search"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Acciones Rápidas */}
            <div className="col-lg-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-header bg-white border-0">
                  <h5 className="mb-0">
                    <i className="bi bi-lightning-charge-fill text-danger me-2"></i>
                    Acciones Administrativas
                  </h5>
                </div>
                <div className="card-body">
                  <div className="d-grid gap-3">
                    <button className="btn btn-danger text-start py-3">
                      <i className="bi bi-person-plus-fill me-2"></i>
                      Crear Nuevo Usuario
                    </button>
                    <button className="btn btn-outline-danger text-start py-3">
                      <i className="bi bi-gear-fill me-2"></i>
                      Configuración del Sistema
                    </button>
                    <button className="btn btn-outline-danger text-start py-3">
                      <i className="bi bi-shield-lock me-2"></i>
                      Administrar Permisos
                    </button>
                    <button className="btn btn-outline-danger text-start py-3">
                      <i className="bi bi-graph-up me-2"></i>
                      Generar Reportes
                    </button>
                    <button className="btn btn-outline-danger text-start py-3">
                      <i className="bi bi-database me-2"></i>
                      Backup del Sistema
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Estadísticas Secundarias */}
          <div className="row mt-3">
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-header bg-white border-0">
                  <h5 className="mb-0">
                    <i className="bi bi-pie-chart-fill text-danger me-2"></i>
                    Distribución de Usuarios
                  </h5>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-center">
                    <div className="chart-placeholder bg-light rounded-circle d-flex align-items-center justify-content-center" style={{width: '200px', height: '200px'}}>
                      <span className="text-muted">Gráfico de distribución</span>
                    </div>
                  </div>
                  <div className="row mt-4 text-center">
                    <div className="col-4">
                      <h5 className="text-danger">72%</h5>
                      <small className="text-muted">Usuarios</small>
                    </div>
                    <div className="col-4">
                      <h5 className="text-warning">18%</h5>
                      <small className="text-muted">Moderadores</small>
                    </div>
                    <div className="col-4">
                      <h5 className="text-primary">10%</h5>
                      <small className="text-muted">Administradores</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-header bg-white border-0">
                  <h5 className="mb-0">
                    <i className="bi bi-exclamation-triangle-fill text-danger me-2"></i>
                    Alertas del Sistema
                  </h5>
                </div>
                <div className="card-body">
                  <div className="alert alert-warning">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-exclamation-triangle-fill me-2 fs-4"></i>
                      <div>
                        <h6 className="alert-heading mb-1">Espacio en disco</h6>
                        <p className="mb-0 small">El 85% del almacenamiento está en uso</p>
                      </div>
                    </div>
                  </div>
                  <div className="alert alert-danger">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-shield-exclamation me-2 fs-4"></i>
                      <div>
                        <h6 className="alert-heading mb-1">Seguridad</h6>
                        <p className="mb-0 small">3 intentos de acceso no autorizado</p>
                      </div>
                    </div>
                  </div>
                  <div className="alert alert-info">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-arrow-up-circle-fill me-2 fs-4"></i>
                      <div>
                        <h6 className="alert-heading mb-1">Actualización</h6>
                        <p className="mb-0 small">Nueva versión disponible (v2.3.1)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;