import React from 'react'
import styled from 'styled-components'
import slide1 from '../../assets/imgs/cooperacion.png'

const Slide =styled.div`
    background-image: url(${slide1});
    background-size: cover;
    background-position: center center;
    height:380px;
    @media (max-width:700px) {
        height:240px;
    }
`

const slider = (props) => {
    return(
        <Slide altura={props.altura}/>
    )

}

export default slider