import React from 'react';
import styled from 'styled-components'

const Img = styled.img`
    height: 20vh;
`



class Produto extends React.Component{
    constructor(props) {
        super(props)

        this.state = { qtd : 1}
    }

    changeQtd = (event) => {
        const qtd = parseInt(event.target.value)
        this.setState({qtd})
    }
    adicionar = () =>{
        this.props.adicionar(this.props.item.name, this.state.qtd)
        this.setState({ qtd : 1 })
    }

    render(){
        return (
            <div>
                <h3>{this.props.item.name}</h3>
                <Img src={this.props.item.imageUrl}/>
                <p>Valor: {this.props.item.value}</p>
                <div>
                    <input type="number" value={this.state.qtd} onChange={this.changeQtd}/>
                    <button onClick={this.adicionar}>+</button>
                </div>
            </div>
        );
    }
}

export default Produto;