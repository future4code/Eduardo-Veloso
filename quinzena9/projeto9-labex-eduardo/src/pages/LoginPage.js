import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import axios from "axios"
// import styled from "styled-components"

export const LoginPage = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const { form, onChange, cleanFields } = useForm({
    password: "",
    email: "",
  })

  const login = (event) => {
    event.preventDefault();

    const body = form

    axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/eduardo-veloso-munoz/login",
        body
      )
      .then((response) => {
        console.log("Deu certo: ", response.data.token);
        localStorage.setItem("token", response.data.token);
        history.push("/AdminHome");
      })
      .catch((error) => {
        console.log("Deu errado: ", error.response);
      });

    cleanFields();
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          name="email"
          placeholder={"Email"}
          onChange={onChange}
          value={form.email}
          required
          type={"email"}
        />
        <br/>
        <input
          name="password"
          placeholder={"Senha"}
          onChange={onChange}
          value={form.password}
          required
          type={"password"}
        />
        <br/>
        <button onClick={login}>Entrar</button>
      </form>
      <button onClick={goBack}>Voltar</button>
      
    </div>
  );
}