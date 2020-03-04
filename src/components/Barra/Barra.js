import React from 'react'
import styled from 'styled-components'

const Barraazul=styled.div`
    height: 80px;
    background-color: #283da7;
    color: white;
    font-size: 20px;
    padding: 30px;
    display: grid;
    align-content: center;
`

const Barra = (props) =>{
    return(
        <Barraazul>
            <div>{props.titulo}</div>
        </Barraazul>
    )
}

export default Barra