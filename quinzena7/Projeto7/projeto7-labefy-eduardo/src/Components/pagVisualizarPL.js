import React from 'react'
import axios from 'axios'
// import PagDetalhesPL from './pagDetalhesPL'
import styled from "styled-components"

const Div2 = styled.div `
    display: flex;
    flex-flow: column;
    align-items: center;
`

const Button2 = styled.button `
    margin: 0px 10px;
`

export default class pagVisualizarPL extends React.Component {
    state = {
        listas: []
    }

    componentDidMount() {
        this.pegarListas()
    }

    pegarListas = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "eduardo-veloso-munoz"
                }
            })
            this.setState({listas: res.data.result.list})
        }
        catch (err) {
            alert("Algo de errado não está certo, tente novamente")
        }
    }

    excluirPL = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "eduardo-veloso-munoz"
            }
        })
        .then((res) => {
            alert("Playlist deletada!")
            this.pegarListas()
        })
        .catch((err) => {
            alert("Algo deu errado! Tente novamente.")
        })
    }

    render () {
        const playlists = this.state.listas.map((list) => {
            return (
                <div key={list.id}>
                    {list.name}
                    <Button2 onClick={() => this.excluirPL(list.id)}>Excluir</Button2>
                </div>
            )
        })

        return (
            <Div2>
                <h1>Visualizar Playlists</h1>
                {playlists}
            </Div2>
        )
    }
}