import React from "react";
import { useInput } from "../../hooks/useInput";
import heroimage from "../../static/images/gente_reparando.png"

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
  const Email = useInput();
  const Password = useInput();
  const size = 13;
  return (
    <FormContainer>
      <Form>
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
          <Img src={heroimage} alt=""/>
      </ImgContainer>
    </FormContainer>
  );
};
