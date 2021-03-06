import React from "react";
import { Hero } from "../components/Hero";
import { How } from "../components/How";
import { WebApp } from "../components/WebApp";
import { Apply } from "../components/Apply";
import { Helmet } from "react-helmet";
import {Footter} from '../components/Footer'
import {NavBar} from '../components/Navbar'

export const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Yendo! | Técnicos a domicilio</title>
        <meta
          name="description"
          content="Técnicos a domicilio en lima para todos los rubros."
        />
        <link rel="canonical" href="https://estamosyendo.com" />
      
      </Helmet>
      <NavBar/>
      <Hero />
      <How/>
      <WebApp/>
      <Apply/>
      <Footter/>
    </>
  );
};
