import React, { useState } from "react";
import { observer } from "mobx-react";

//components
import SearchBar from "../SearchBar";
import NoteItem from "./NoteItem";
// import AddButton from "../buttons/AddButton";

// styles
import { Title, ListWrapper } from "./styles";

const NoteList = ({ notes = [] }) => {
  const [query, setQuery] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.name.toLowerCase().includes(query.toLowerCase())
  );

  const noteList = filteredNotes.map((note) => (
    <NoteItem note={note} key={note.id} />
  ));

  return (
    <div className="container">
      <Title>Notes</Title>

      <SearchBar setQuery={setQuery} />
      <ListWrapper>{noteList}</ListWrapper>

      {/* <AddButton /> */}
    </div>
  );
};

export default observer(NoteList);
