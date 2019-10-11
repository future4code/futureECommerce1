import React from 'react';


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
            <div>
            <label>Valor Maximo: </label><br/>
                <input type='number' value={this.state.max} onChange={this.changeMax}/>
                <br/> 
                <label>Valor Minimo </label><br/>
                <input type='number' value={this.state.min} onChange={this.changeMin}/>
                <br/>
                <label>Nome </label><br/>
                <input type='text' value={this.state.nome} onChange={this.changeNome}/>
                <button onClick={this.props.mostrarCarrinho}>Carrinho</button>
            </div>
        );
    }
}

export default Filtro;