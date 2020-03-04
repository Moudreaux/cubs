import React from 'react';
import styled from 'styled-components'
import Menu from '../components/Menu/Menu'
import Slider from '../components/Slider/Slider'
import LogoVerbal from '../components/LogoVerbal/LogoVerbal'
import Actividades from '../components/Actividades/Actividades'
import './App.css';

const Wrapper = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`

function App() {
  return (
    <div className="App">
      <header>
        <Wrapper>
          <Menu />
          <Slider />
          <LogoVerbal />
          <Actividades />
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
