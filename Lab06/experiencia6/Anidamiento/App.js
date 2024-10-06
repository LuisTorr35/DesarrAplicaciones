import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Perfil from './componentes/Perfil';
import ConfigurarPerfil from './componentes/ConfigurarPerfil';
import Estadisticas from './componentes/Estadisticas';

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/perfil">Perfil</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/perfil" element={<Perfil />}>
                    <Route path="configuracion" element={<ConfigurarPerfil />} />
                    <Route path="estadisticas" element={<Estadisticas />} />
                </Route>
            </Routes>
        </Router>
    );
}
