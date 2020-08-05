import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

import AddButton from "../buttons/AddButton";
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";

// //style
import { DetailWrapper } from "./styles";

import noteStore from "../../store/NoteStore";
import notebookStore from "../../store/NotebookStore";

import NoteList from "../NoteList";

const NotebookDetails = () => {
  const { notbookSlug } = useParams();

  const notebook = notebookStore.notebooks.find(
    (_notebook) => _notebook.slug === notbookSlug
  );

  if (!notebook) return <Redirect to="/notebooks" />;

  const notes = notebook.notes
    .map((note) => noteStore.getItemById(note.id))
    .filter((note) => note);

  return (
    <div className="row">
      <div className="contaier">
        <DetailWrapper className="col-12">
          <h4>{notebook.name}</h4>
          {/* // */}
          {/* <h4>{notebook.description}</h4> */}
          <UpdateButton notebook={notebook} />
          <DeleteButton notebookId={notebook.id} />
        </DetailWrapper>
      </div>
      <div className="col-12">
        <NoteList notes={notes} />
        <AddButton notebook={notebook} />
      </div>
    </div>
  );
};

export default observer(NotebookDetails);
