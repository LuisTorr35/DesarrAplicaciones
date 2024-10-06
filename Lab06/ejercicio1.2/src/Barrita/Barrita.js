import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BarritaNav = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
        link.integrity = 'sha384-DyZv8J2Y5aD8AY4M3e8o2y+ZBaj0KrV5wZRTs8fQpCfS2+M5Y7D0dSKwH7CKGds9';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Integrantes <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/proyectos">Proyectos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacto">Contacto</Link>
                    </li>
                    <li className="nav-item"> {/* Nueva pestaña para agregar integrantes */}
                        <Link className="nav-link" to="/agregar">Agregar Integrantes</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default BarritaNav;
