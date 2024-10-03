import React from 'react';
import './App.css';
import Tablita from './Tablita/Tablita';
import BarritaNav from './Barrita/Barrita';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (

        <div>
            <nav><BarritaNav /></nav>
            <div className="tablota"><Tablita /></div>
        </div>
    );
}

export default App;
