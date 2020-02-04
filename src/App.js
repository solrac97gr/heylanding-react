import React from "react";
import { Router } from "@reach/router";
import router from './router/index'
/* Styles */
import { GlobalStyle } from "./styles/GlobalStyles";
/* Pages */
import {NavBar} from './components/Navbar'
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar/>
      <Router>
        <Home path={router.home} />
      </Router>
    </>
  );
}

export default App;
