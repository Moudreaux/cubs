import React from 'react'
import styled from 'styled-components'
import Actividad from './Actividad/Actividad'
import Barra from '../Barra/Barra'

import foto1 from './../../assets/imgs/noticias/convivencia.jpg'
import foto2 from './../../assets/imgs/noticias/seguridad.jpg'
import foto3 from './../../assets/imgs/noticias/boletin.jpg'
import foto4 from './../../assets/imgs/noticias/DanielMartinez.jpg'


const Listado=styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-auto-flow: row;
    font-size:19px;
    z-index:2;
    @media(max-width:700px){
        grid-template-columns: 100%;
        font-size:16px;
    }
`
const listactividades = [
    {titulo:'AAU AGRUP. ATLETAS DEL URUGUAY',copete:'Pre-inscripción Torneo 2020 Toda la información aquí.',foto:foto1,alt:'Agrupacion de atletas'},
    {titulo:'DIDA - PANEL INTERNACIONAL',copete:'Políticas de Seguridad Social para el Adulto Mayor',foto:foto2,alt:'Panel Internacional'},
    {titulo:'BOLETÍN DE COOPERACIÓN',copete:'Este número del Boletín describe las actividades del CUBS',foto:foto3,alt:'Boletín de cooperación'},
    {titulo:'REUNIÓN CON INTENDENTE',copete:'Mirtha Sosa y Daniel Martinez. La presidenta del CUBS...',foto:foto4,alt:'Reunión con el intendente'},
]

const Actividades = () =>{

    const clicHandler = (event) =>{
        console.log(event.target)
    }

    return(
        <div>
            <Barra titulo="Actividades" mas="+"/>
            <Listado  className="contenedor">
                {listactividades.map((noti,index) => {
                    return(
                        <Actividad 
                            titulo={noti.titulo}
                            copete={noti.copete}
                            src={noti.foto}
                            alt={noti.alt}
                            key={index}
                            clicked={clicHandler}
                        />
                    )
                })}
            </Listado>
        </div>
    )
}

export default Actividades