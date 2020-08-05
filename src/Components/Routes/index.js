import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";

import { observer } from "mobx-react";

// component
import NotebookDetails from "../NotebookDetails";
import NotebookList from "../NotebookList";

const Routes = () => {
  return (
    <Switch>
      <Route path="/notebooks/:notbookSlug">
        <NotebookDetails />
      </Route>

      <Route path="/">
        <NotebookList />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
