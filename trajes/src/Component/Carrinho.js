import React from 'react';


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
        const list = this.props.produtos.map((produto)=>{return <div><div><p>{produto.quantidade}X {produto.name}</p> <button onClick={()=>{this.props.removeItem(produto.name)}}>X</button></div><hr/></div>})
        const soma = this.soma()
    
        return (
            <div>
                <h3>Carrinho</h3>
                {list} 
                <p>Total : {soma}</p>
            </div>
    );
    }
}
export default Carrinho;