import React from "react";
import { Link, Nav,ButtonCTA,Logo } from "./styles";
import router from "../../router";


export const NavBar = () => {
  return (
    <Nav>       
      <Logo/>
      <div>
        <Link to={router.home}>Inicio</Link>
        <Link to={router.aboutus}>Nosotros</Link>
        <Link to={router.tech}>Técnicos</Link>
        <Link to={router.singin}>Iniciar sesión</Link>
        <ButtonCTA to={router.singup} >Registrarme</ButtonCTA>
      </div>
    </Nav>
  );
};
