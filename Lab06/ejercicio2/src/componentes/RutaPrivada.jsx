import { Navigate } from 'react-router-dom';

const RutaPrivada= ({ children }) => {
  const isAuthenticated = false; 

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default RutaPrivada;
