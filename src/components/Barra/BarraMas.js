import React from 'react'
import styled from 'styled-components'

const Barra=styled.div`
    color: #283da7;
    display: grid;
    align-content: center;
`

const Mas = styled.div`
    text-align: right;
    font-size: 20px;
    padding: 20px 10px;;
`

const Barramas = (props) =>{
    return(
        <Barra>
                <Mas>{props.mas}</Mas>
        </Barra>
    )
}

export default Barramas