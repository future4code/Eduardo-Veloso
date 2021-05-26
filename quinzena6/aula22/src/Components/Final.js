import React from "react";
import styled from "styled-components";

const FinalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`

export default class Final extends React.Component {

  render (){
    return (
      <div >
        <h1>O Formulário acabou!</h1>
        <p>Muito obrigado por participar. Entraremos em contato!</p>
      </div>
    );
  }
}