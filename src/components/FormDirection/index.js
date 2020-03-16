import React, { useState } from "react";
import { useInput } from "../../hooks/useInput";
import {navigate} from '@reach/router'
import router from '../../router/index'
import {
  FormDirectionContainer,
  Select,
  FormTitle,
  Input,
  TextArea,
  Button
} from "./styles";

export const FormDirection = () => {
  const [distric, setDistric] = useState("Jesús María");
  const direction = useInput("");
  const reference = useInput("");

  const InitRequirement = () => {
    window.localStorage.setItem("district",distric)
    window.localStorage.setItem("direction",direction.value)
    window.localStorage.setItem("reference",reference.value)
    navigate(router.selectPaymentMethod)

  }
  
  return (
    <FormDirectionContainer>
      <FormTitle>Seleccionar el distrito</FormTitle>
      <Select
        id="districts"
        name="districs"
        onChange={(e) => setDistric(e.target.value)}
      >
        <option value="Jesús María">Jesús María</option>
        <option value="La Molina">La Molina</option>
        <option value="San Isidro">San Isidro</option>
        <option value="Miraflores">Miraflores</option>
      </Select>
      <FormTitle>Ingresa tu dirección</FormTitle>
      <Input type="text" onChange={direction.onChange} />
      <FormTitle>Añade una referencia</FormTitle>
      <TextArea cols="50" rows="5" onChange={reference.onChange}></TextArea>
      <Button onClick={InitRequirement}>Ingresar solicitud</Button>
    </FormDirectionContainer>
  );
};
