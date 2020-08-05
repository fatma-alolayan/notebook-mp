import React, { useState } from "react";
import Modal from "react-modal";
//styles
import { CreateButtonStyled } from "./styles";
// store
import noteStore from "../../store/noteStore";

const customStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%,-50%)",
  },
};

const NoteModal = ({ notebook, isOpen, closeModal, oldNote }) => {
  const [note, setNote] = useState(
    oldNote ?? {
      name: "",
    }
  );

  const handleChange = (event) => {
    const newNote = { ...note, [event.target.name]: event.target.value };
    setNote(newNote);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    noteStore[oldNote ? "updateNote" : "createNote"](note, notebook);

    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      style={customStyle}
      contentLabel="Note Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              name="name"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={note.name}
            />
          </div>
        </div>
        <CreateButtonStyled className="btn float-right" type="submit">
          {oldNote ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default NoteModal;
