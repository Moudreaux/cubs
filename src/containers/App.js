import React from 'react';
import Menu from '../components/Menu/Menu'
import Presentacion from '../components/Presentacion/Presentacion'
import Actividades from '../components/Actividades/Actividades'

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
        <Presentacion />
        <Actividades />
      </header>
    </div>
  );
}

export default App;
