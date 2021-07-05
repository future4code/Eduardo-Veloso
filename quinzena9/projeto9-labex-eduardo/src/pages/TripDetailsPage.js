import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import useNotLogged from "../hooks/useNotLogged";
// import styled from "styled-components"

export const TripDetailsPage = () => {
  useNotLogged()
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  const [ useTrip, setTrip ] = useState("")
  const params = useParams()
  useEffect (() => {
    const token = localStorage.getItem("token")
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/eduardo-veloso-munoz/trip/${params.postId}`, {
      headers: {
        auth: token,
      }})
      .then((response) => {
        setTrip(response.data.trip)
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response)
      })
  }, [])
  console.log(useTrip.candidates)
 
  return (
    <div>
      <h1>Detalhes da viagem</h1>
      <button onClick={goBack}>Voltar</button>
      <div>
        <h2>{useTrip.name}</h2>
        <p>Planeta: {useTrip.planet}</p>
        <p>Descrição: {useTrip.description}</p>
        <p>Duração: {useTrip.durationInDays} dias</p>
        <p>Data: {useTrip.date}</p>
      </div>
      <h2>Candidatos Pendentes</h2>
      {/* {useTrip.candidate !== "" ?  (useTrip.candidates.map((candidate) => {
        return <div key={candidate.id}>
        <h3>Nome: {candidate.name}</h3>
        <p>Profissão: {candidate.profession}</p>
        <p>Idade: {candidate.age}</p>
        <p>País: {candidate.country}</p>
        <p>Texto de Candidatura: {candidate.applicationText}</p>
        </div>}))
        : "Ninguém quer viajar =["
      } */}
      <h2>Candidatos Aprovados</h2>
      <p>{(useTrip.aproved === []) ? "sim" : "Ninguém aprovado para viajar =["}</p>
    </div>
  );
}