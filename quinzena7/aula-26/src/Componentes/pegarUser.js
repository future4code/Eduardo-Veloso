import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`


export default class pegarUser extends React.Component {
    state = {
        user: []
    }

    componentDidMount() {
        this.pegarUser()
    }

    pegarUser = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        
        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "eduardo-veloso-munoz"
                }
            })

            this.setState({ user: res.data })
        } catch (err) {
            alert("Algo deu errado, tente de novo")
        }
    }

    deletarUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "eduardo-veloso-munoz"
            }
        })
            .then((res) => {
                alert("Usuário(a) deletado(a) com sucesso!")
                this.pegarUser()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

    render() {
        const listaUser = this.state.user.map((user) => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <button onClick={() => this.deletarUser(user.id)}>X</button>
                </CardUsuario>
            )
        })

        return (
            <div>
                <button onClick={this.props.funcaoPagCriar}>Criar Usuário</button>
                <h2>Lista de Usuários</h2>
                {listaUser}
            </div>
        )
    }
}