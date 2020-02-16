import React,{useEffect} from "react";

import { NavBar } from "../components/Navbar";
import { RegisterForm } from "../components/RegisterForm";
import {navigate} from "@reach/router"

export const Register = () => {
  useEffect(function(){
    if(window.localStorage.getItem("token")){
      navigate("/")
    }
  })
  return (
    <>
      <NavBar />
      <RegisterForm />
    </>
  );
};
