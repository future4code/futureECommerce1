import React from 'react';
import Filtro from './Component/Filtro'
import Catalogo from './Component/Catalogo';
import Carrinho from './Component/Carrinho';
import styled from 'styled-components';
import traje1 from './Img/astronauta1.jpg'
import traje2 from './Img/astronauta2.jpg'
import traje3 from './Img/astronauta3.jpg'
import traje4 from './Img/astronauta4.jpg'
import traje5 from './Img/astronauta5.png'
import traje6 from './Img/astronauta6.png'
import traje7 from './Img/astronauta7.png'
import traje8 from './Img/astronauta8.png'

const SemCarrinho = styled.div`

`
const ComCarrinho = styled.div`

`
const produtos =[
  {
    name: "Traje12",
    value: 200.0,
    imageUrl: traje1,
    Carrinho: 0
  },
  {
    name: "Traje22",
    value: 300.0,
    imageUrl: traje2,
    Carrinho: 0
  },
  {
    name: "Traje3",
    value: 500.0,
    imageUrl: traje3,
    Carrinho: 0
  },
  {
    name: "Traje4",
    value: 700.0,
    imageUrl: traje4,
    Carrinho: 0
  },
  {
    name: "Traje5",
    value: 300.0,
    imageUrl: traje5,
    Carrinho: 0
  },
  {
    name: "Traje6",
    value: 600.0,
    imageUrl: traje6,
    Carrinho: 0
  },
  {
    name: "Traje7",
    value: 800.0,
    imageUrl: traje7,
    Carrinho: 0
  },
  {
    name: "Traje8",
    value: 400.0,
    imageUrl: traje8,
    Carrinho: 0
  }
]

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = { 
      mostraCarrinho: false,
      produtosFiltrados: produtos,
      produtosCarrinho: [],
                  }
  }

  atualizaFiltro = (Max , Min , Name) => {
    // this.setState({produtosFiltrados : produtos})
  
      const produtosFiltrados = produtos.filter(produto => produto.value <= Max)
                                        .filter(produto => produto.value >= Min)
                                        .filter(produto => produto.name.search(Name) !== -1)
        this.setState({produtosFiltrados})
 
  }
    removeItem = (name)=>{
    const newProdutosCarrinho = this.state.produtosCarrinho.filter((produto)=> {if(produto.name !== name)
                                                                                return true})
    this.setState({produtosCarrinho: newProdutosCarrinho})
  }
  adicionarAoCarrinho = (name, quantidade) =>{
    const newProduto = this.state.produtosFiltrados.find(elemento => elemento.name === name)
    let ver = false
    let newProdutoCarrinho
    this.state.produtosCarrinho.forEach((produto)=>{ if(produto.name === newProduto.name){
                                                        ver = true}                                                  
                                                    })
    if (ver){
      newProdutoCarrinho = this.state.produtosCarrinho
      const oldProduto = newProdutoCarrinho.find((elemento) => {return (elemento.name === name)})
      let soma = quantidade + oldProduto.quantidade
      const newProdutosCarrinho2 = this.state.produtosCarrinho.filter((produto)=> {if(produto.name !== name)
                                                                                  return true})
      newProduto.quantidade = soma
      newProdutoCarrinho =  [...newProdutosCarrinho2, newProduto]
    }
    else{
      newProduto.quantidade = quantidade
      newProdutoCarrinho =  [...this.state.produtosCarrinho, newProduto]
    }
    this.setState({produtosCarrinho: newProdutoCarrinho})
  }

  verCarrinho = ()=>{
    const mostra = !this.state.mostraCarrinho
    this.setState({mostraCarrinho : mostra})
  }


 
 

  render(){
   const estado = this.state.mostraCarrinho?
   <ComCarrinho>  <Filtro filtrar={this.atualizaFiltro} mostrarCarrinho={this.verCarrinho}/> <Catalogo adicionar={this.adicionarAoCarrinho} produtos={this.state.produtosFiltrados}/> <Carrinho removeItem={this.removeItem} produtos={this.state.produtosCarrinho}/> </ComCarrinho>
   :<SemCarrinho> <Filtro filtrar={this.atualizaFiltro} mostrarCarrinho={this.verCarrinho}/> <Catalogo adicionar={this.adicionarAoCarrinho} produtos={this.state.produtosFiltrados}/> </SemCarrinho>;
   
   return (
      <div>
        {estado}
      </div>
    );
  }
}

export default App;
