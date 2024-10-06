import React from 'react';

const Login = () => {
  const handleLogin = () => {
    localStorage.setItem('auth', 'true'); 
    window.location.href = '/perfil'; 
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;
