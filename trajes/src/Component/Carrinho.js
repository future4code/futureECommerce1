import React from 'react';
import styled from 'styled-components';
import iconeLixeira from '../Img/iconeLixeira.png';

const MeuCarrinho = styled.div`
    background-color: bisque;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 2px orange solid;
    border-radius: 10px;
    margin-left: 10px;
`

const QtidadeDeProduto = styled.p`
    margin: 0;
`

const SmallContainer = styled.div`
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    &:hover{
        font-weight: bold;
    }
`

const IconeLixeira = styled.img`
    width: 15px;
`

const BotaoExcluir = styled.button`
    background-color: white;
    border: 1px dashed orange;
    padding: 5px;
    margin-left: 15px;
`

const TotalPagar = styled.p`
    margin: 10px 0;
    font-size: 16pt;
`


class Carrinho extends React.Component {
    constructor(props){
        super(props)

        this.state = { soma: 0 }
    }


    soma = () =>{
        let aux = 0
        this.props.produtos.forEach((produto)=>{ aux += (produto.value * produto.quantidade)})
        return aux
    }


    render(){
        const list = this.props.produtos.map((produto)=>{return <SmallContainer>
                                                                    <QtidadeDeProduto>{produto.quantidade} x {produto.name}</QtidadeDeProduto>
                                                                    <BotaoExcluir onClick={()=>{this.props.removeItem(produto.name)}}>
                                                                        <IconeLixeira src={iconeLixeira} alt=""/>
                                                                    </BotaoExcluir>
                                                                </SmallContainer>
                                                        })
        const soma = this.soma()
    
        return (
            <MeuCarrinho>
                <h3>Carrinho</h3>
                {list} 
                <TotalPagar>Total: R$ {soma}</TotalPagar>
            </MeuCarrinho>
    );
    }
}
export default Carrinho;