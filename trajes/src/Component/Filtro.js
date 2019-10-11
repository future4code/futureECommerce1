import React from 'react';
import styled from 'styled-components';
import iconeCarrinho from '../Img/iconeCarrinho.png';

const Entrada = styled.input`
    width: 100px;
    height: 25px;
    margin-bottom: 20px;
    margin-top: 5px;
    border: 1px solid orange;
    border-radius: 5px;
    text-align: center;        
`
const BigContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 2px solid orange;
    border-radius: 10px;
    background-color: bisque;
`

const Filtros = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const VerCarrinho = styled.button`
    background-color: white;
    border: 2px orange solid;
    border-radius: 8px;
    padding: 5px;
    font-size: 12pt;
    &:hover{
        border: 2px dashed orange;
    }
    margin-bottom: 50px;
`

const IconeCarrinho =styled.img`
    width: 100px;
`

class Filtro extends React.Component {
    constructor(props){
        super(props)

        this.state = {max: Infinity,
                      min: 0,
                      nome: ""}
    }

    changeMax = (event) =>{
        if(event.target.value === ""){
            this.setState({max : Infinity})
            this.props.filtrar(Infinity , this.state.min, this.state.nome)
        }else{        
            this.setState({max : event.target.value})
            this.props.filtrar(event.target.value , this.state.min, this.state.nome)
        }
    }

    changeMin = (event) =>{
        this.setState({min : event.target.value})
        this.props.filtrar(this.state.max , event.target.value, this.state.nome)
    }

    changeNome = (event) =>{
        this.setState({ nome : event.target.value})
        this.props.filtrar(this.state.max , this.state.min, event.target.value)
    }
    
    render(){
        return (
            <BigContainer>
                <Filtros>
                    <h4>FILTROS:</h4>
                    
                    <label>Máximo: </label>
                    <Entrada type='number' value={this.state.max} onChange={this.changeMax}/>
                    
                    <label>Mínimo:</label>
                    <Entrada type='number' value={this.state.min} onChange={this.changeMin}/>
                    
                    <label>Nome do produto:</label>
                    <Entrada type='text' value={this.state.nome} onChange={this.changeNome}/>
                </Filtros>
                <VerCarrinho onClick={this.props.mostrarCarrinho}><IconeCarrinho src={iconeCarrinho} alt=""/></VerCarrinho>
            </BigContainer>
        );
    }
}

export default Filtro;