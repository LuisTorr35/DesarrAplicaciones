import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import SobreNosotros from './componentes/SobreNosotros';

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            </Routes>
        </Router>
    );
}

export default App;
