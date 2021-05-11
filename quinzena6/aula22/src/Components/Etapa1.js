import React from "react";
import styled from "styled-components";

const Etapa1Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`

export default class Etapa1 extends React.Component {

  render (){
    return (
      <Etapa1Div>
        <h1>Etapa 1 - Dados Gerais</h1>
        <p>1. Qual seu nome?</p>
        <input type="text"/>
        <p>2. Qual sua idade?</p>
        <input type="text"/>
        <p>3. Qual seu email?</p>
        <input type="text"/>
        <p>4. Qual sua escolaridade?</p>
        <select>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Superior Incompleto</option>
          <option>Ensino Superior Completo</option>
        </select>
      </Etapa1Div>
    );
  }
}