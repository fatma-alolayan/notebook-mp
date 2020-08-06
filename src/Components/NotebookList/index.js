import { Title } from "./styles";

import React, { useState } from "react";
import notebookStore from "../../store/NotebookStore";
import NotebookItem from "./NotebookItem";
import { observer } from "mobx-react";
import SearchBar from "../SearchBar";
import AddButton from "../buttons/AddButton";

const NotebookList = () => {
  // const [query, setQuery] = useState("");

  const notebookList = notebookStore.notebooks.map((notebook) => (
    <NotebookItem notebook={notebook} key={notebook.id} />
  ));

  return (
    <div className="container">
      <Title> Notebook</Title>
      {/* <SearchBar setQuery={setQuery} /> */}
      {notebookList}
      <AddButton />
    </div>
  );
};

export default observer(NotebookList);
