import React from 'react';
import styled from 'styled-components';

const Input = styled.input` 
    width: 5vw;
`
const Div = styled.div` 
    margin-left: 2vw;
    margin-top: 2vh
`

class Filtro extends React.Component {
    constructor(props){
        super(props)

        this.state = {max: Infinity,
                      min: 0,
                      nome: ""}
    }

    changeMax = (event) =>{
        this.setState({max : event.target.value})
        this.props.filtrar(event.target.value , this.state.min, this.state.nome)
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
            <Div>
                <label>Valor Maximo: </label><br/>
                <Input type='number' value={this.state.max} onChange={this.changeMax}/>
                <br/> 
                <label>Valor Minimo </label><br/>
                <Input type='number' value={this.state.min} onChange={this.changeMin}/>
                <br/>
                <label>Nome </label><br/>
                <Input type='text' value={this.state.nome} onChange={this.changeNome}/>
                <br/><br/>
                <button onClick={this.props.mostrarCarrinho}>Carrinho</button>
            </Div>
        );
    }
}

export default Filtro;