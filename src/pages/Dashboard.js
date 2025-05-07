import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('username');
    
    if (!token) {
      navigate('/login');
    } else {
      setUsername(user);
    }
  }, [navigate]);

  return (
    <div className="container mt-5">
      <h2>Bienvenido, {username}</h2>
    </div>
  );
};

export default Dashboard;
