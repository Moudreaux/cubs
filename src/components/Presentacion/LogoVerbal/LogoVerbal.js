import React from 'react'
import styled from 'styled-components'
import asociado from '../../../assets/imgs/icsw.jpg'

const Wrapper =styled.div`
    display:grid;
    grid-template-rows: 80% 20%;
    height:${props => props.altura || "320px"};
    @media (max-width:700px) {
        height:250px;
    }
`
const Verbal =styled.div`
    display: grid;
    font-size: 23px;
    text-align: center;
    align-content: center;
    line-height: 34px;
    color:#283da7;
    padding: 20px;
    background-color: #e2e2e2;
    @media (max-width:700px) {
        font-size: 18px;
        line-height: 22px;
    }
`
const Asociado = styled.div`
    text-align:center;
    background-color: #c6c6c6;
    display: grid;
    justify-content: center;
    align-content: center;
`

const logoverbal = (props) => {
    return(
        <Wrapper>
            <Verbal altura={props.altura}>
                El Consejo Uruguayo de Bienestar Social es una institución de carácter no gubernamental que afilia instituciones y organismos (públicos, privados y profesionales) interesados en el BIENESTAR SOCIAL
            </Verbal>
            <Asociado>
                <img src={asociado} alt="Asociado a ICSW" />
            </Asociado>
        </Wrapper>
    )
}

export default logoverbal