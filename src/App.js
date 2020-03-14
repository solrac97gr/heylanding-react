import React from "react";
import { Router } from "@reach/router";
import router from './router/index'
/* Styles */
import { GlobalStyle } from "./styles/GlobalStyles";
/* Components */

/* Pages */
import { Home } from "./pages/Home";
import {Aboutus} from './pages/Aboutus'
import {Technicans} from './pages/Technicans'
import {Login} from './pages/Login'
import {Register} from './pages/Register'
import {SelectArea} from './pages/SelectArea'
import {SelectDirection} from './pages/SelectDirection'
import {SelectPaymentMethod} from './pages/SelectPaymentMethod'
import {SelectService} from './pages/SelectService'




function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home path={router.home} />
        <Aboutus path={router.aboutus}/>
        <Technicans path={router.tech} />
        <Login path={router.singin} />
        <Register path={router.singup}/>
        <SelectArea path={router.selectArea}/>
        <SelectDirection path={router.selectDirection}/>
        <SelectPaymentMethod path={router.selectPaymentMethod}/>
        <SelectService path={router.selectService}/>
      </Router>
     
    </>
  );
}

export default App;
