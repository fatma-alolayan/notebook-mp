import React, { useState } from "react";
import Modal from "react-modal";
//styles
import { CreateButtonStyled } from "./styles";
// store
import notebookStore from "../../store/NotebookStore";
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

const NotebookModal = ({ isOpen, closeModal, oldNotebook }) => {
  const [notebook, setNotebook] = useState(
    oldNotebook ?? {
      name: "",
    }
  );

  const handleChange = (event) => {
    const newNotebook = {
      ...notebook,
      [event.target.name]: event.target.value,
    };
    setNotebook(newNotebook);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    oldNotebook
      ? notebookStore.updateNotebook(notebook)
      : notebookStore.createNotebook(notebook);

    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      style={customStyle}
      contentLabel="Notebook Modal"
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
              value={notebook.name}
            />
          </div>
        </div>

        <CreateButtonStyled className="btn float-right" type="submit">
          {oldNotebook ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default NotebookModal;
