import React from 'react';
import styled from 'styled-components'
import iconeAdicionar from '../Img/iconeAdicionar.png';

const Img = styled.img`
    height: 20vh;
`

const CardProduto = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    border: 2px solid orange;
`

const AcaoProduto = styled.div`
    width: 80%;
    margin: 0 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    
`

const EntradaQuantidade = styled.input`
    width: 50px;
    padding: 5px;
    border: 1px solid orange;
    border-radius: 5px;
    text-align: center;
`

const BotaoAdicionar = styled.button`
    background-color: white;
    border: none;
`

const IconeAdicionar = styled.img`
    width: 30px;
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
            <CardProduto>
                <h3>{this.props.item.name}</h3>
                <Img src={this.props.item.imageUrl}/>
                <p>Valor: R$ {this.props.item.value}</p>
                <AcaoProduto>
                    <span>Quantidade:</span>
                    <EntradaQuantidade type="number" value={this.state.qtd} onChange={this.changeQtd}/>
                    <BotaoAdicionar onClick={this.adicionar}>
                        <IconeAdicionar src={iconeAdicionar} alt=""/>
                    </BotaoAdicionar>
                </AcaoProduto>
            </CardProduto>
        );
    }
}

export default Produto;