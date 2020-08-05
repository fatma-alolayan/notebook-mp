import React from "react";
import notes from "../../notes";
import { useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//components
// import List from "../List";
// import AddButton from "../buttons/AddButton";
// import UpdateButton from "../buttons/UpdateButton";
// import DeleteButton from "../buttons/DeleteButton";

// //style
import { DetailWrapper, ListWrapper } from "./styles";

// //store
import noteStore from "../../store/noteStore";
import notebookStore from "../../store/notebookStore";
import NoteList from "../NoteList";

const NoteDetails = () => {
  const { noteSlug } = useParams();

  const note = noteStore.notes.find((note) => note.slug === noteSlug);

  if (!note) return <Redirect to="/Notebook" />;

  // const notes = notebook.notes
  //   .map((note) => noteStore.getItemById(note.id))
  // .filter((note) => note);

  return (
    <>
      <ListWrapper>
        <DetailWrapper>
          <h1>{note.name}</h1>
          <p>{note.title}</p>
          <p>{note.body}</p>

          {/* <UpdateButton note={note} />
          <DeleteButton noteId={noteId} /> */}
        </DetailWrapper>
      </ListWrapper>
    </>
  );
};

export default observer(NoteDetails);
