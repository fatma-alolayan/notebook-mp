import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//components
// import AddButton from "../buttons/AddButton";
// import UpdateButton from "../buttons/UpdateButton";
// import DeleteButton from "../buttons/DeleteButton";

// //style
import { DetailWrapper } from "./styles";

// //store
import noteStore from "../../store/noteStore";
import notebookStore from "../../store/notebookStore";
import NoteList from "../NoteList";

const NotebookDetails = () => {
  const { notbookSlug } = useParams();

  const notebook = notebookStore._notebooks.find(
    (notebook) => notebook.slug === notbookSlug
  );

  if (!notebook) return <Redirect to="/" />;

  // const notes = notebook.notes
  //   .map((note) => noteStore.getItemById(note.id))
  // .filter((note) => note);

  return (
    <>
      <DetailWrapper>
        <NoteList notbookId={notebook.id} />
        <p>{notebook.name}</p>
      </DetailWrapper>
      {/* <UpdateButton notebook={notebook} />
      <DeleteButton notebookId={notebookId} /> */}
    </>
  );
};

export default observer(NotebookDetails);
