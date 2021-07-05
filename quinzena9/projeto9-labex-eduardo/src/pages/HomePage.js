import { useHistory } from "react-router-dom";
// import styled from "styled-components"


export const HomePage = () => {
    const history = useHistory()
    const goToLisTripPage = () => {
        history.push("/ListTrip")
    }

    const goToLoginPage = () => {
        history.push("/Login")
    }


  return (
    <div>
        <h1>Labe-X Viagens Espaciais</h1>
        <p>Quero conhecer o sistema Solar!!!</p>
        <button onClick={goToLisTripPage}>Ver Planos</button>
        <p>Trabalho na melhor empresa do UNIVERSO</p>
        <button onClick={goToLoginPage}>Login Admins</button>
    </div>
  );
}