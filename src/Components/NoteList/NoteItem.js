import React from "react";
import { NoteWrapper } from "./styles";
import DeleteButton from "../buttons/DeleteButton";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import UpdateButton from "../buttons/UpdateButton";

const NoteItem = ({ note }) => {
  return (
    <NoteWrapper>
      <Link to={`/notes/${note.slug}`}>
        <p> {note.description}</p>
      </Link>
      <UpdateButton note={note} />
      <DeleteButton noteId={note.id} />
    </NoteWrapper>
  );
};

export default observer(NoteItem);
