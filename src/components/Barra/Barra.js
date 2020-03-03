import React from 'react'
import styled from 'styled-components'

const Barraazul=styled.div`
    height: 80px;
    background-color: #283da7;
    color: white;
`
const Contenido =styled.div`
    font-size: 20px;
    padding: 30px;
    display: grid;
    align-content: center;
    justify-content: center;
    grid-template-columns: 60% 40%;
`
const Mas = styled.div`
    text-align: right;
`

const Barra = (props) =>{
    return(
        <Barraazul>
            <Contenido className="contenedor">
                <div>{props.titulo}</div>
                <Mas>{props.mas}</Mas>
            </Contenido>
        </Barraazul>
    )
}

export default Barra