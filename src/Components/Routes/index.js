import React from "react";
import { Route, Switch } from "react-router";

import { observer } from "mobx-react";

// component
import Home from "../../Home";
import NotebookDetails from "../NotebookDetails";
import NotebookList from "../NotebookList";
import noteStore from "../../store/NoteStore";
import NoteList from "../NoteList";
import NoteDetails from "../NoteDetails";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/notebooks/:notebookSlug">
          <NotebookDetails />
        </Route>
        <Route path="/notebooks">
          <NotebookList />
        </Route>
        <Route path="/notes/:noteSlug">
          <NoteDetails />
        </Route>
        <Route exact path="/notes">
          <NoteList notes={noteStore.notes} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default observer(Routes);
