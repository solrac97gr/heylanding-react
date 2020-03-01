import React, { useState } from "react";
import { navigate } from "@reach/router";
import { useInput } from "../../hooks/useInput";
import heroimage from "../../static/images/gente_reparando.png";
import { ErrorBanner } from "../ErrorBanner";
import firebase from "firebase/app";

import "firebase/auth";

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
  const Email = useInput("");
  const Password = useInput("");
  const ConfirmPassword = useInput("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const LoginWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        window.localStorage.setItem("token", result.credential.accessToken);
        window.localStorage.setItem("photo", result.user.photoURL);
        navigate("/tecnicos");
      })
      .catch(function(error) {
        setError(error.message);
      });
  };
  const LoginWithFacebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        window.localStorage.setItem("token", result.credential.accessToken);
        window.localStorage.setItem("photo", result.user.photoURL);
        navigate("/tecnicos");
      })
      .catch(function(error) {
        setError(error.message);
      });
  };

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
          window.localStorage.setItem("token", data);
          window.localStorage.setItem(
            "photo",
            "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
          );

          setLoading(false);
          navigate("/tecnicos");
        });
    } else {
      setError("Las contraseñas deben coincidir");
    }
  };

  const size = 13;
  return (
    <FormContainer>
      {loading ? (
        "loading..."
      ) : (
        <Form onSubmit={HandleSubmit}>
          <FormTitle>Registrarme</FormTitle>
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
            <Button social facebook onClick={LoginWithFacebook}>
              <FaFacebookF size={size} /> Facebook
            </Button>
            <Button social google onClick={LoginWithGoogle}>
              <FaGoogle size={size} color="#D50000" />
              Google
            </Button>
          </SocialButtons>
          <Button>Registrarme</Button>
          {error.length > 0 ? <ErrorBanner error={error} /> : <></>}
        </Form>
      )}

      <ImgContainer>
        <Img src={heroimage} alt="" />
      </ImgContainer>
    </FormContainer>
  );
};
