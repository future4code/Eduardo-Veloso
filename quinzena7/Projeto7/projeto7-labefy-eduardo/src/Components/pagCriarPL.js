import React from 'react'
import axios from 'axios'
import styled from "styled-components"

const Div1 = styled.div `
    display: flex;
    flex-flow: column;
    align-items: center;
`

export default class pagCriarPL extends React.Component {
    state = {
        nome: ""
    }

    cuidaNome = (e) => {
        this.setState({nome: e.target.value})
    }

    cadastrarPL = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome
        }

        axios.post(url, body, {
            headers:{
                Authorization: "eduardo-veloso-munoz"
            }
        })
        .then ((res) => {
            alert("Playlist criada com sucesso!")
            this.setState({nome: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render () {
        return (
            <Div1>
                <h1>Criar Playlist</h1>
                <div>
                    <p>Nome</p>
                    <input
                        placeholder={"Playlist"}
                        value={this.state.nome}
                        onChange={this.cuidaNome}
                    />
                    <button onClick={this.cadastrarPL}>Enviar</button>
                </div>
            </Div1>
        )
    }
}