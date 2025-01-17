import React from 'react';
import styled from 'styled-components'; 

const BigcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const BigcardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
const BigcardImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const BigcardHQuatro = styled.h4`
    margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <BigcardContainer>
            <BigcardImg src={ props.imagem } />
            <BigcardDiv>
                <BigcardHQuatro>{ props.nome }</BigcardHQuatro>
                <p>{ props.descricao }</p>
            </BigcardDiv>
        </BigcardContainer>
    )
}

export default CardGrande;