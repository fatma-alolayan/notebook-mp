import React, { useState } from "react";
import Modal from "react-modal";
//styles
import { CreateButtonStyled } from "./styles";
// store
import tagStore from "../../store/TagStore";

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

const TagModal = ({ note, isOpen, closeModal, oldTag }) => {
  const [note, setTag] = useState(
    oldTag ?? {
      tag: "",
    }
  );

  const handleChange = (event) => {
    const newTag = { ...tag, [event.target.name]: event.target.value };
    setTag(newTag);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    tagStore[oldTag ? "updateTag" : "createTag"](note, tag);

    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      style={customStyle}
      contentLabel="Tag Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Tag</label>
            <input
              required
              name="name"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={tag.tag}
            />
          </div>
        </div>

        <CreateButtonStyled className="btn float-right" type="submit">
          {oldTag ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default TagModal;
