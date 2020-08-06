import React from "react";
import { observer } from "mobx-react";

//components
import NavBar from "./Components/NavBar";
import Routes from "./Components/Routes";

//styles
import { GlobalStyle } from "./styles";
import notebookStore from "./store/notebookStore";
import noteStore from "./store/noteStore";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      {notebookStore.loading || noteStore.loading ? (
        <h1> loading</h1>
      ) : (
        <Routes />
      )}
    </>
  );
}

export default observer(App);
