import React from "react";
import { observer } from "mobx-react";
import { Route } from "react-router";

//components
import NavBar from "./Components/NavBar";
import Routes from "./Components/Routes";

//styles
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes />
    </>
  );
}

export default observer(App);
