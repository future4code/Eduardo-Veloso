import React from 'react';
import styled from 'styled-components';

const LittlecardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 1px 10px;
    margin-bottom: 1px;
    height: 100px;
`

const LittlecardImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const LittlecardHQuatro = styled.h4`
    margin-bottom: 5px;
`

const LittlecardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <LittlecardContainer>
            <LittlecardImg src={ props.imagem } />
            <LittlecardDiv>
                <LittlecardHQuatro>{ props.nome }</LittlecardHQuatro>
                <p>{ props.descricao }</p>                
            </LittlecardDiv>
        </LittlecardContainer>
    )
}

export default CardPequeno;