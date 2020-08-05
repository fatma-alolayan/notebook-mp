import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import NoteModal from "../modals/NoteModal";
import NotebookModal from "../modals/NotebookModal";

const AddButton = ({ notebook }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <div>
      <MdAddCircleOutline
        className="float-right"
        size="2em"
        onClick={openModal}
      />
      {notebook ? (
        <NoteModal
          notebook={notebook}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      ) : (
        <NotebookModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AddButton;
