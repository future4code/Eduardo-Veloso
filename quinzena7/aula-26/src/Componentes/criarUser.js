import React from 'react';
import axios from 'axios';

export default class CriarUser extends React.Component {
  state = {
    nome: "",
    email: "",
  }

  inputNome = (e) => {
    this.setState({nome: e.target.value})
  }

  inputEmail = (e) => {
    this.setState({email: e.target.value})
  }

  criarUserF = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.nome,
      email: this.state.email,
    }

    axios.post(url, body, {
      headers: {
        Authorization: "eduardo-veloso-munoz"
      }
    })
    .then((res) => {
      alert("Usuário(a) cadastrado(a) com sucesso!")
      this.setState({nome: "", email: ""})
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.props.funcaoPagPegar}>Ver Lista de Usuários</button>
        <h2>Criar Usuário</h2>
        <div>
          <input
            placeholder={"Nome"}
            value={this.state.nome}
            onChange={this.inputNome}
          />
          <input
            placeholder={"E-mail"}
            value={this.state.email}
            onChange={this.inputEmail}
          />
          <button onClick={this.criarUserF}>Criar</button>
        </div>
      </div>
    );
  }
}