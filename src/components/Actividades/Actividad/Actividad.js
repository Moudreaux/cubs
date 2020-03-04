import React from 'react'
import styled from 'styled-components'

const Actividad = styled.div`
    padding:20px;
    border-bottom: solid 1px blue;
    cursor: pointer;
    font-size:19px;
    @media(max-width:650px){
        font-size:14px;
    }
    @media(max-width:450px){
        font-size:17px;
    }
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
    letter-spacing: 0.1em;
    font-size:1em;
    padding-top:10px;
`
const Copete=styled.p`
    line-height: 1.3em;
    padding-top: 5px;
    font-size:0.8em;
    
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