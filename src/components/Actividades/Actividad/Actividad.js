import React from 'react'
import styled from 'styled-components'

const Actividad = styled.div`
    padding:20px;
    border-bottom: solid 1px blue;
    cursor: pointer;
`
const Foto = styled.img`
    padding: 0 10px 0 0 ;
    float:left;
    src: url(${props => props.src});
    alt: url(${props => props.alt});
`
const Titulo=styled.p`
    color: #283da7;
    text-transform:uppercase;
    font-weight: 600;
    letter-spacing: 2px;
`
const Copete=styled.p`
    line-height: 20px;
    padding-top: 5px;
`
const actividad = (props) => {
    return (
            <Actividad onClick={props.clicked}>
                <Foto src={props.src} alt={props.alt} />
                <Titulo>{props.titulo}</Titulo>
                <Copete>{props.copete}</Copete>
            </Actividad>
    )
}

export default actividad