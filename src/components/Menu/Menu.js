import React, {Component} from 'react'
import styled from 'styled-components'
import Logotransparente from '../../assets/imgs/logotransparente.png'

const anchomax=700;

const NavSuperior = styled.nav`
    width: 100%;
    max-width: 1280px;
    margin:0 auto;
    height:80px;
    @media (min-width:${anchomax+'px'}){
        display:grid;
        grid-template-columns: 20% 80%;
    }
`
const BarraLogo =styled.div`
    display:grid;
    grid-template-columns:auto auto auto;
    justify-content: space-between;
    h1{
        display:grid;
        font-size:16px;
        text-align:left;
        align-content: center;
        line-height:20px;
        color:darkblue;
        padding:0 10px;
    }
    img{padding:5px;}
    @media (min-width:${anchomax+'px'}){
        grid-template-columns:auto;
        h1{display:none;}
    }
`
const Botonera = styled.div`
    display: grid;
    grid-template-columns: 100%;
    display:${props => props.visible===true ? 'grid' : 'none'};
    @media (min-width:${anchomax+'px'}){
        font-size: 17px;
        grid-template-columns: repeat(6,auto);
        padding-top: 12px;
        justify-content: space-between;
        padding-bottom: 17px;
    }
`
const Divredes = styled.div`
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(2,50%);
    
`
const Boton=styled.button`
    width: 100%;
    color:white;
    background-color: rgba(13, 54, 167, 0.9);
    padding: 20px;
    margin-bottom: 1px;
    text-align: center;
    text-transform: uppercase;
    border:none;
    z-index:9999;
    @media (min-width:${anchomax+'px'}){
        color:#767676;
        text-align: center;
        padding: 20px 10px;
        background-color:white;
    }
`
const BotonMenu = styled.div`
    font-family: 'iconos';
    font-size: 36px;
    text-align: right;
    padding-right: 10px;
    color: #004393;
    display:grid;
    align-content: center;
    @media (min-width:${anchomax+'px'}){
        display:none;
    }
`

const red = {fontFamily: 'iconos',fontSize: '21px',textTransform:'none'}

class MenuSmart extends Component {
    state = {visible: window.innerWidth>anchomax};

    componentDidMount() {window.addEventListener('resize', this.handleWindowResize);}
    componentWillUnmount() {window.removeEventListener('resize', this.handleWindowResize);}
    handleWindowResize = () => {this.setState({visible: window.innerWidth>anchomax});}

    toogleMenu = () => {this.setState({visible : this.state.visible ? false : true})};
    render(){
        return(
                <NavSuperior>
                    <BarraLogo>
                        <img src={Logotransparente} alt="Logotipo de CUBS" />
                        <h1>Consejo Uruguayo de Bienestar Social</h1>
                        <BotonMenu onClick={this.toogleMenu}>e</BotonMenu>
                    </BarraLogo>
                    <Botonera visible={this.state.visible}>
                        <Boton>Inicio</Boton>
                        <Boton>Conócenos</Boton>
                        <Boton>Actividades</Boton>
                        <Boton>Enlaces</Boton>
                        <Boton>Contacto</Boton>
                        <Divredes>
                            <Boton style={red}>f</Boton>
                            <Boton style={red}>i</Boton>
                        </Divredes>
                    </Botonera>
                </NavSuperior>
            )
    }
}

export default MenuSmart