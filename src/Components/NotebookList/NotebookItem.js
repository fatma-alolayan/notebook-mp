import React from "react";
import { Link } from "react-router-dom";

const NotebookItem = ({ notebook }) => {
  return (
    <Link to={`/notebooks/${notebook.slug}`}>
      <p>{notebook.name} </p>
    </Link>
  );
};

export default NotebookItem;
