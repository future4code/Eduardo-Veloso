import React from "react";
import styled from "styled-components";

const Etapa2Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`

export default class Etapa2 extends React.Component {

  render (){
    return (
      <Etapa2Div>
        <h1>Etapa 2 - Informações do Ensino Superior</h1>
        <p>1. Qual o curso?</p>
        <input type="text"/>
        <p>2. Qual a unidade de ensino?</p>
        <input type="text"/>
      </Etapa2Div>
    );
  }
}