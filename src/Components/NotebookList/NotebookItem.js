import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//components
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";

// styles
import { NotebookWrapper } from "./styles";

const NotebookItem = ({ notebook }) => {
  return (
    <NotebookWrapper>
      <Link to={`/notebooks/${notebook.slug}`}>
        <p>{notebook.name}</p>
      </Link>

      <UpdateButton notebook={notebook.id} />
      <DeleteButton notebookId={notebook.id} />
    </NotebookWrapper>
  );
};

export default observer(NotebookItem);
