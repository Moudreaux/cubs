import React from 'react'
import styled from 'styled-components'
import slide1 from '../../../assets/imgs/cooperacion.png'

const Slide =styled.div`
    background-image: url(${slide1});
    background-size: cover;
    background-position: center center;
    height:${props => props.altura || "320px"};
    @media (max-width:700px) {
        height:250px;
    }
`

const slider = (props) => {
    return(
        <Slide altura={props.altura}/>
    )

}

export default slider