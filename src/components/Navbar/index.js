import React, { useState } from "react";
import {
  Link,
  Nav,
  ButtonCTA,
  Logo,
  NavElements,
  NavElementsMovil,
  Img,
  Button
} from "./styles";
import router from "../../router";
import "./hamb.css";

export const NavBar = () => {
  const [photo] = useState(function() {
    if (window.localStorage.getItem("photo")) {
      return window.localStorage.getItem("photo");
    } else {
      return "";
    }
  });
  const [ShowhmabMenu, SetShowHambMenu] = useState(false);
  const HandleClick = () => {
    document.getElementById("hamb").classList.toggle("active");
    SetShowHambMenu(!ShowhmabMenu);
  };
  const HandleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("photo");
    window.location.reload();
  };
  return (
    <Nav>
      <Logo />
      <div>
        <svg
          id="hamb"
          className="ham hamRotate ham1"
          viewBox="0 0 100 100"
          width="50"
          onClick={HandleClick}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </div>
      <NavElements>
        <Link to={router.home}>Inicio</Link>
        <Link to={router.aboutus}>Nosotros</Link>
        <Link to={router.tech}>Técnicos</Link>
        {window.localStorage.getItem("token") ? (
          <Button onClick={HandleLogout}>Cerrar Sesión</Button>
        ) : (
          <></>
        )}
        {window.localStorage.getItem("photo") ? (
          <Img src={photo} alt="" />
        ) : (
          <ButtonCTA to={router.singup}>Registrarme</ButtonCTA>
        )}
      </NavElements>
      {ShowhmabMenu && (
        <NavElementsMovil>
          <Link to={router.home}>Inicio</Link>
          <Link to={router.aboutus}>Nosotros</Link>
          <Link to={router.tech}>Técnicos</Link>
          {window.localStorage.getItem("token") ? (
            <Button onClick={HandleLogout}>Cerrar Sesión</Button>
          ) : (
            <></>
          )}
          {window.localStorage.getItem("token") ? (
            <></>
          ) : (
            <Link to={router.singup}>Registrarme</Link>
          )}
        </NavElementsMovil>
      )}
    </Nav>
  );
};
