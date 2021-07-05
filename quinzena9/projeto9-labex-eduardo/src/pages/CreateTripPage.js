import axios from "axios";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import useNotLogged from "../hooks/useNotLogged";
// import styled from "styled-components"

export const CreateTripPage = () => {
  useNotLogged()

  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  })

  const create = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token')
    const body = form
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/eduardo-veloso-munoz/trips", 
    body, {
    headers: {
      auth: token,
    }})
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log("Deu erro: ", error.response)
    })
    cleanFields();
  }

  return (
    <div>
      <h1>Criar Viagem</h1>
      <form onSubmit={create}>
      <input
          name="name"
          placeholder={"Nome"}
          onChange={onChange}
          value={form.nome}
          required
          title={"Digite seu nome!"}
        />
        <br/>
        <select
          name="planet"
          placeholder={"Planeta"}
          onChange={onChange}
          required
          title={"Selecione um planeta"}
        >
          <option value="" disabled="" defaultValue>Escolha um Planeta</option>
          <option value={"mercury"}>Mercúrio</option>
          <option value={"venus"}>Vênus</option>
          <option value={"mars"}>Marte</option>
          <option value={"jupiter"}>Júpiter</option>
          <option value={"saturn"}>Saturno</option>
          <option value={"uranus"}>Urano</option>
          <option value={"neptune"}>Netuno</option>
          <option value={"pluto"}>Plutão</option>
          
        </select>
        <br/>
        <input
          name="date"
          placeholder={"Data"}
          onChange={onChange}
          value={form.date}
          required
          type={"date"}
          title="Escolha uma data."
        />
        <br/>
        <input
          name="description"
          placeholder={"Descrição"}
          onChange={onChange}
          value={form.description}
          required
          patter={"^.{30,}$"}
          title={"Deve conter no máximo 30 caracteres."}
        />
        <br/>
        <input
          name="durationInDays"
          placeholder={"Duração em dias"}
          onChange={onChange}
          value={form.durationInDays}
          required
          type={"number"}
          min={50}
          title={"Decida por uma duração!"}
        />
        <br/>
        <button>Criar!</button>
      </form>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
}