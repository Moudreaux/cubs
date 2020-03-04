import React from 'react'
import styled from 'styled-components'
import Slider from './Slider/Slider'
import LogoVerbal from './LogoVerbal/LogoVerbal'

const Doscol = styled.div`
    display: grid;
    grid-template-columns:50% 50%;
    justify-content: space-around;
    grid-auto-flow: row;
    @media (max-width:700px) {
        grid-template-columns: 100%;
    }
`

const Presentacion = () => {
    return(
        <Doscol className="contenedor">
            <Slider />
            <LogoVerbal />
        </Doscol>
    )
}

export default Presentacion