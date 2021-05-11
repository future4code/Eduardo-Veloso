import React from "react";
import styled from "styled-components";
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import Final from "./Components/Final";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`

export default class App extends React.Component {
  state = {
    page: "etapa1"
  }

  proximaEtapa = () => {
    switch (this.state.page) {
      case "etapa1":
        return this.setState({page: "etapa2"})
      case "etapa2":
        return this.setState({page: "etapa3"})
      case "etapa3":
        return this.setState({page: "final"})
      default:
        break;
    } 
  }

  render (){
    const page = () => {
      switch (this.state.page) {
        case "etapa1":
          return <Etapa1/>
        case "etapa2":
          return <Etapa2/>
        case "etapa3":
          return <Etapa3/>
        case "final":
          return <Final/>
        default:
          break;
      }
    }

    return (
      <Body>
        <div>{page()}</div>
        <br/>
        <button onClick={this.proximaEtapa}>Próxima Etapa</button>
      </Body>
    );
  }
}
