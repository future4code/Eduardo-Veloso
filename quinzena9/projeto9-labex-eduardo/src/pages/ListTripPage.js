import { useEffect, useState } from "react/cjs/react.development";
import { useHistory } from "react-router-dom";
import axios from "axios"
// import styled from "styled-components"

export const ListTripPage = () => {
    const history = useHistory()
    const goToApplicationFormPage = () => {
      history.push("/ApplicationForm")
    }
    const goBack = () => {
      history.goBack()
    }

    const [useTrip, setTrip] = useState([])

    useEffect(() => {
      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/eduardo-veloso-munoz/trips")
      .then((response) => {
        setTrip(response.data.trips)
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response)
      })
    }, [])

  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToApplicationFormPage}>Aplique-se!</button>
      <h1>Viagens Disponíveis</h1>
      <div>
        {useTrip.map((trip) => {
          return <div key={trip.id}>
              <h2>{trip.name}</h2>
              <p>Planeta: {trip.planet}</p>
              <p>Descrição: {trip.description}</p>
              <p>Duração: {trip.durationInDays} dias</p>
              <p>Data: {trip.date}</p>
            </div>
        })}
      </div>
    </div>
  );
}