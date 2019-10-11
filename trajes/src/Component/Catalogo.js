import React from 'react';
import Produto from './Produto';
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

class Catalogo extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {produtos : this.props.produtos,
                      ordem: "",
                      aux : 0
                    }
    }

    ordenar = (event) =>{
        this.setState({ordem : event.target.value})
        if (this.state.ordem === 'crescente'){
            this.crescente()
        }
       else {
            this.decrescente()
        }
    }
    crescente = () =>{
        let ordem = this.props.produtos.sort((a, b)=>{{return b.value - a.value}})
        this.setState({produtos:ordem,
                        aux : 1})

    }
        
        
    decrescente = () => {
        let ordem = this.props.produtos.sort((a, b)=>{{return a.value - b.value}})
        this.setState({produtos:ordem,
                        aux : 1})
        
        
    }

    protutar = () => {
        let test
        if(this.state.aux === 1 ){
            test = this.state.produtos.map((produto)=>{return <Produto adicionar={this.props.adicionar} item={produto}/>})
            this.setState({aux: 0})
        }
        else{
        test = this.props.produtos.map((produto)=>{return <Produto adicionar={this.props.adicionar} item={produto}/>})
        }
        return test
    }

    render(){
        const produto = this.protutar()
        return (
            <div>
                <select value={this.state.ordem} onChange={this.ordenar}>
                    <option value="" disabled="disabled" selected="selected">Ordem</option>
                    <option value='crescente'>Preço Crescente</option>
                    <option value='decrescente'>Preço Decrescente</option>
                </select>
                <Container>
                    {produto}
                </Container>
            </div>
        );
    }
}
export default Catalogo;