import React from "react";
import { observer } from "mobx-react";

// store
import noteStore from "../../store/noteStore";
import notebookStore from "../../store/notebookStore";

// styles
import { DeleteButtonStyled } from "./styles";

const DeleteButton = ({ notebookId, noteId }) => {
  const handleDelete = () => {
    if (noteId) noteStore.deleteNote(noteId);
    else notebookStore.deleteNotebook(notebookId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default observer(DeleteButton);
