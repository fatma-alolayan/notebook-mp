import React from "react";
import { DetailWrapper, ListWrapper } from "./styles";
import { observer } from "mobx-react";
import { Link, Redirect, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";
import noteStore from "../../store/noteStore";

const NoteDetails = () => {
  const { noteSlug } = useParams();
  const note = noteStore.notes.find((note) => note.slug === noteSlug);
  if (!note) return <Redirect to="/notes" />;
  return (
    <DetailWrapper>
      <Link to="/notes">
        <p>Back to notes</p>
      </Link>

      <ListWrapper>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title style={{ color: "pink" }}>
              {note.description}
            </Card.Title>
            <Card.Text>
              <DeleteButton noteId={note.id} />
              <UpdateButton note={note} />
            </Card.Text>
          </Card.Body>
        </Card>
      </ListWrapper>
    </DetailWrapper>
  );
};

export default observer(NoteDetails);
