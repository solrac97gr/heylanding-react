import React from "react";
import { Hero } from "../components/Hero";
import { How } from "../components/How";
import { WebApp } from "../components/WebApp";
import { Apply } from "../components/Apply";
import {Footter} from '../components/Footer'
import { Helmet } from "react-helmet";

export const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HeySolve! | Técnicos a domicilio</title>
        <meta
          name="description"
          content="Técnicos a domicilio en lima para todos los rubros."
        />
      </Helmet>
      <Hero />
      <How/>
      <WebApp/>
      <Apply/>
      <Footter/>
    </>
  );
};
