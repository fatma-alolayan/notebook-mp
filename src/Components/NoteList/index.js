import NoteItem from "./NoteItem";
import { ListWrapper } from "./styles";
import React, { useState } from "react";
import SearchBar from "../SearchBar";
import { observer } from "mobx-react";

const NoteList = ({ notes = [] }) => {
  const [query, setQuery] = useState("");
  const noteList = notes
    .filter((note) => note.tag.toLowerCase().includes(query.toLowerCase()))
    .map((note) => <NoteItem note={note} key={note.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{noteList}</ListWrapper>
      {/* <AddButton /> */}
    </div>
  );
};

export default observer(NoteList);
