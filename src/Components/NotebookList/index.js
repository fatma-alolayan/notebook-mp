import React, { useState } from "react";
import { observer } from "mobx-react";

//components
import SearchBar from "../SearchBar";
import AddButton from "../buttons/AddButton";
import notebooks from "../../notebooks";
import NotebookItem from "./NotebookItem";

//store
// import notebookStore from "../../store/notebookStore";

// styles
import { Title, ListWrapper } from "./styles";

const NotebookList = () => {
  const [query, setQuery] = useState("");

  const notebookList = notebooks.map((notebook) => (
    <NotebookItem notebook={notebook} key={notebook.id} />
  ));

  return (
    <div className="container">
      <Title>NoteBooks</Title>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{notebookList}</ListWrapper>

      <AddButton />
    </div>
  );
};

export default observer(NotebookList);
