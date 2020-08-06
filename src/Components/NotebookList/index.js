import { Title } from "./styles";

import React from "react";
import notebookStore from "../../store/NotebookStore";
import NotebookItem from "./NotebookItem";
import { observer } from "mobx-react";
import AddButton from "../buttons/AddButton";

const NotebookList = () => {
  const notebookList = notebookStore.notebooks.map((notebook) => (
    <NotebookItem notebook={notebook} key={notebook.id} />
  ));

  return (
    <div className="container">
      <Title> Notebook</Title>
      {/* <SearchBar setQuery={setQuery} /> */}
      {notebookList}
      <AddButton />
      {/* <UpdateButton notebook={notebook} />
      <DeleteButton notebookId={notebook.id} /> */}
    </div>
  );
};

export default observer(NotebookList);
