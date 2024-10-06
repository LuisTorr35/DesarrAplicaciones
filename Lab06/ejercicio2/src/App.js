import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Contador from './componentes/Contador';
import ContadorH from './componentes/ContadorH';
import ContadorE from './componentes/ContadorE';
import DetallesProductos from './componentes/DetallesProductos';
import ListaProductos from './componentes/ListaProductos';
import Login from './componentes/Login';  // Agrega tu componente de Login
import RutaPrivada from './componentes/RutaPrivada';
import Perfil from './componentes/Perfil';
import Configuracion from './componentes/Configuracion';
function App() {
  return (
      <Router>
        <Navbar />
        <Header Tienda="Bienvenido a la Tienda Virtual" />
        <div className="container my-5">
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<ListaProductos />} />
            <Route path="/contador" element={<Contador />} />
            <Route path="/contadorH" element={<ContadorH />} />
            <Route path="/contadorE" element={<ContadorE />} />
            <Route path="/login" element={<Login />} />

            {/* Ruta anidada para productos */}
            <Route path="/productos" element={<ListaProductos />}>
              <Route path="detalles/:id" element={<DetallesProductos />} />
            </Route>

            {/* Rutas privadas */}
            <Route
                path="/perfil"
                element={
                  <RutaPrivada>
                    <Perfil />
                  </RutaPrivada>
                }
            />
            <Route
                path="/configuracion"
                element={
                  <RutaPrivada>
                    <Configuracion />
                  </RutaPrivada>
                }
            />
          </Routes>
        </div>
        <Footer año={2024} />
      </Router>
  );
}

export default App;
