import React from 'react';
import CriarUser from './Componentes/criarUser';
import PegarUser from './Componentes/pegarUser';


export default class App extends React.Component {
  state = {
    pagAtual: "CriarUser",
  }

  trocarPag = () => {
    switch (this.state.pagAtual) {
      case "CriarUser":
        return <CriarUser funcaoPagPegar={this.pagPegarUser}/>
      case "PegarUser":
        return <PegarUser funcaoPagCriar={this.pagCriarUser}/>
      default:
        return <div>Página não encontrada!</div>
    }
  }

  pagCriarUser = () => {
    this.setState({pagAtual: "CriarUser"})
  }

  pagPegarUser = () => {
    this.setState({pagAtual: "PegarUser"})
  }

  render() {
    return (
      <div>
        <h1>Labenusers</h1>
        <div>
          {this.trocarPag()}
        </div>
      </div>
    );
  }
}