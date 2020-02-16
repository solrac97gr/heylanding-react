import React,{useState} from "react";
import { useInput } from "../../hooks/useInput";
import heroimage from "../../static/images/gente_reparando.png";

import {
  Form,
  FormContainer,
  Input,
  Button,
  FormTitle,
  SocialButtons,
  InputGuide,
  Img,
  ImgContainer
} from "./styles";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

export const LoginForm = () => {
  const Email = useInput("");
  const Password = useInput("");
  const size = 13;
  const [token,setToken] = useState("")

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (true) {
      fetch(
        `https://us-central1-hey-solve.cloudfunctions.net/CreateUser?email=${Email.value}&password=${Password.value}`
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          setToken(data)
          window.localStorage.setItem("token",token)
        });
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={HandleSubmit}>
        <FormTitle>Iniciar Sesión</FormTitle>
        <InputGuide>Ingresa tu email</InputGuide>
        <Input
          type="email"
          placeholder="ejemplo@correo.com"
          required
          onChange={Email.onChange}
          value={Email.value}
        />
        <InputGuide>Ingresa tu contraseña</InputGuide>
        <Input
          type="password"
          placeholder="Ingresa tu contraseña"
          required
          onChange={Password.onChange}
          value={Password.value}
        />
        <SocialButtons>
          <Button social facebook>
            <FaFacebookF size={size} /> Facebook
          </Button>
          <Button social google>
            <FaGoogle size={size} color="#D50000" />
            Google
          </Button>
        </SocialButtons>
        <Button>Iniciar Sesión</Button>
      </Form>
      <ImgContainer>
        <Img src={heroimage} alt="" />
      </ImgContainer>
    </FormContainer>
  );
};
