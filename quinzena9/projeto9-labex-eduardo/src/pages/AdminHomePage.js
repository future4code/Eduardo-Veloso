import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import useNotLogged from "../hooks/useNotLogged";
import axios from "axios"
import styled from "styled-components"

const Div1 = styled.div `
border: 1px black solid;
display: flex;
justify-content: space-between;
margin: 5px;
padding: 5px;
`

export const AdminHomePage = () => {
  useNotLogged()

  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }
  const goToCreateTripPage = () => {
    history.push("/CreateTrip")
  }
  const logOff = () => {
    localStorage.removeItem('token')
    history.push('/Login')
  }

  const [useTrips, setTrips] = useState([])

  useEffect(() => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/eduardo-veloso-munoz/trips")
    .then((response) => {
      setTrips(response.data.trips)
    })
    .catch((error) => {
      console.log("Deu erro: ", error.response)
    })
  }, [])
  
  const delTrip = (id) => {
    const token = localStorage.getItem('token')
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/eduardo-veloso-munoz/trips/${id}`, {
      headers: {
        auth: token,
      }})
    .then((response) => {
      console.log(response.data)
      window.location.reload(false);
    })
    .catch((error) => {
      console.log("Deu erro: ", error.response)
    })
  }

  const goToTripDetails = (id) => {
    history.push(`/TripDetails/${id}`)
  }

  return (
    <div>
      <h1>Administar</h1>
      <h3>Faça a melhor empresa do universo ser ainda melhor!</h3>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      <button onClick={logOff}>Logout</button>
      <div>
        {useTrips.map((trip) => {
          return <Div1 onClick={() => goToTripDetails(trip.id)} key={trip.id}><p>{trip.name}</p><button onClick={() => delTrip(trip.id)}>Deletar</button></Div1>
        })}
      </div>
    </div>
  );
}