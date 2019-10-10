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
    name: "Traje1",
    value: 10001.0,
    imageUrl: traje1,
    Carrinho: 0
  },
  {
    name: "Traje2",
    value: 10002.0,
    imageUrl: traje2,
    Carrinho: 0
  },
  {
    name: "Traje3",
    value: 10003.0,
    imageUrl: traje3,
    Carrinho: 0
  },
  {
    name: "Traje4",
    value: 40000.0,
    imageUrl: traje4,
    Carrinho: 0
  },
  {
    name: "Traje5",
    value: 10050.0,
    imageUrl: traje5,
    Carrinho: 0
  },
  {
    name: "Traje6",
    value: 10600.0,
    imageUrl: traje6,
    Carrinho: 0
  },
  {
    name: "Traje7",
    value: 10700.0,
    imageUrl: traje7,
    Carrinho: 0
  },
  {
    name: "Traje8",
    value: 100000.0,
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
    this.setState({produtosFiltrados : produtos})
    if(Max !== ''){
      const filtroMax = produtos.filter((produto)=>{ 
                                                    if(produto.value <= Max)  
                                                      return true
                                                    }
                                        )
                                                    this.setState({produtosFiltrados : filtroMax})
    }
    if(Min !== ''){
      const filtroMin = produtos.filter((produto)=>{ 
                                                    if(produto.value >= Min ) 
                                                      return true
                                                  }
                                        )
                                                    this.setState({produtosFiltrados : filtroMin})
                                            
    }
    if(Name !== ''){
      const filtroName = produtos.filter((produto)=>{ if(produto.name.search(Name) !== -1)
                                                        return true
                                                    }
                                        )
                                                    this.setState({produtosFiltrados : filtroName})
                                          
    }
  }

  adicionarAoCarrinho = (name ,quantidade) =>{
    const newProduto = this.state.produtosFiltrados.find((elemento) => {return (elemento.name === name)} )
    const newProdutoCarrinho =  this.state.produtosCarrinho
    for(let i=1; i <= quantidade; i++){
      newProdutoCarrinho.push(newProduto)
    }
    this.setState({produtosCarrinho: newProdutoCarrinho})
  }

  verCarrinho = ()=>{
    const mostra = !this.state.mostraCarrinho
    this.setState({mostraCarrinho : mostra})
  }
 

  render(){
   const estado = this.state.mostraCarrinho?
   <SemCarrinho> <Filtro filtrar={this.atualizaFiltro} mostrarCarrinho={this.verCarrinho}/> <Catalogo produtos={this.state.produtosFiltrados}/> </SemCarrinho>
   :<ComCarrinho>  <Filtro filtrar={this.atualizaFiltro} mostrarCarrinho={this.verCarrinho}/> <Catalogo produtos={this.state.produtosFiltrados}/> <Carrinho produtos={this.state.produtosCarrinho}/> </ComCarrinho>;
    return (
      <div>
        {estado}
      </div>
    );
  }
}

export default App;
