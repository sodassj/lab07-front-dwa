// src/pages/AdminDashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [data, setData] = useState(null);

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
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {data ? (
        <div>{/* Mostrar datos de admin */}</div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default AdminDashboard;
