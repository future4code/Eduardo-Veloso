import React from "react";
import styled from "styled-components";

const Etapa3Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`

export default class Etapa3 extends React.Component {

  render (){
    return (
      <Etapa3Div>
        <h1>Etapa 3 - Informações Gerais de Ensino</h1>
        <p>1. Porque você não terminou um curso de graduação?</p>
        <input type="text"/>
        <p>2. Você fez algum curso complementar?</p>
        <select>
          <option>Nenhum</option>
          <option>Curso Técnico</option>
          <option>Curso de Inglês</option>
        </select>
      </Etapa3Div>
    );
  }
}