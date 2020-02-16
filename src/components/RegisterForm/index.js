import React, { useState } from "react";
import {navigate} from "@reach/router"
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

export const RegisterForm = () => {
  const Email = useInput();
  const Password = useInput();
  const ConfirmPassword = useInput();
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (Password.value === ConfirmPassword.value) {

      setLoading(true);
      fetch(
        `https://us-central1-hey-solve.cloudfunctions.net/CreateUser?email=${Email.value}&password=${Password.value}`
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          setToken(data);
          window.localStorage.setItem("token", token);
          setLoading(false);
          navigate("/tecnicos")
        });
    }else{
      setError("Las contraseñas deben coincidir")
    }
  };

  const size = 13;
  return (
    <FormContainer>
      {loading ? (
        "loading..."
      ) : (
        <Form onSubmit={HandleSubmit}>
          <FormTitle>Registarme</FormTitle>
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
          <InputGuide>Repite tu contraseña</InputGuide>
          <Input
            type="password"
            placeholder="Repite tu contraseña"
            required
            onChange={ConfirmPassword.onChange}
            value={ConfirmPassword.value}
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
          <Button>Registrarme</Button>
          {
           error.length>0?"Contraseñas deben coincidir":"no hay error jeje"
          }
        </Form>
      )}

      <ImgContainer>
        <Img src={heroimage} alt="" />
      </ImgContainer>
    </FormContainer>
  );
};
