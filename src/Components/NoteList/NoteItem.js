import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//components
// import UpdateButton from "../buttons/UpdateButton";
// import DeleteButton from "../buttons/DeleteButton";

// styles
import { NoteWrapper } from "./styles";

const NoteItem = ({ note }) => {
  return (
    <NoteWrapper>
      <Link to={`/notebook/${note.slug}`}>
        <p>{note.title}</p>
      </Link>
      <p>{note.body}</p>

      {/* <UpdateButton notebook={notebook} />
      <DeleteButton notebookId={notebookId} /> */}
    </NoteWrapper>
  );
};

export default observer(NoteItem);
