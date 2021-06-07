import React from 'react'
import PagCriarPL from './Components/pagCriarPL'
import PagVisualizarPL from './Components/pagVisualizarPL'
// import PagDetalhesPL from './Components/pagDetalhesPL'
import styled from "styled-components"

const Header = styled.header `
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  /* width: 300px; */
`

const Button = styled.button `
  margin: 0px 10px;
`

export default class App extends React.Component {
  state = {
    pagAtual: 'visualizarPL'
  }

  pagAtual = () => {
    switch (this.state.pagAtual) {
      case 'criarPL':
        return <PagCriarPL/>
      case 'visualizarPL':
        return <PagVisualizarPL/>
      // case 'detalhesPL':
      //   return <PagDetalhesPL/>
      default:
        return <h1>Página Não Encontrada! =[</h1>
    }
  }

  irParaCriar = () => {
    this.setState({pagAtual: 'criarPL'})
  }

  irParaVisualizar = () => {
    this.setState({pagAtual: 'visualizarPL'})
  }

  // irParaDetalhes = () => {
  //   this.setState({pagAtual: 'detalhesPL'})
  // }

  render () {
    return(
      <div>
        <Header>
          <Button onClick={() => this.irParaVisualizar()}>Visualizar</Button>
          <Button onClick={() => this.irParaCriar()}>Criar</Button>
          {/* <button onClick={() => this.irParaDetalhes()}>Detalhes</button> */}
        </Header>
        {this.pagAtual()}
      </div>
    )
  }
}