import React from "react";
import { Link } from "react-router-dom";
import { NoteWrapper } from "./styles";
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";

const NotebookItem = ({ notebook }) => {
  return (
    <NoteWrapper>
      <Link to={`/notebooks/${notebook.slug}`}>
        <p>{notebook.name} </p>
      </Link>
      <UpdateButton notebook={notebook} />
      <DeleteButton notebookId={notebook.id} />
    </NoteWrapper>
  );
};

export default NotebookItem;
