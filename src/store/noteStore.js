import { decorate, observable } from "mobx";
import axios from "axios";

class NoteStore {
  notes = [];
  loading = true;

  fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notes");
      this.notes = response.data;
      this.loading = false;
    } catch (error) {
      console.error("Notestore -> fetchNotes -> error", error);
    }
  };

  createNote = async (newNote, notebook) => {
    try {
      const formData = new FormData();
      for (const key in newNote) formData.append(key, newNote[key]);
      const res = await axios.post(
        `http://localhost:8000/notebooks/${notebook.id}/notes`,
        formData
      );
      const note = res.data;
      this.notes.push(note);
      notebook.notes.push(note);
    } catch (error) {
      console.log("Notestore -> fetchNotes -> error", error);
    }
  };

  updateNote = async (updatedNote) => {
    try {
      const formData = new FormData();
      for (const key in updatedNote) formData.append(key, updatedNote[key]);
      await axios.put(
        `http://localhost:8000/notes/${updatedNote.id}`,
        formData
      );
      const note = this.notes.find((note) => note.id === updatedNote.id);
      for (const key in updatedNote) note[key] = updatedNote[key];
    } catch (error) {
      console.log("Notestore -> fetchNotes -> error", error);
    }
  };

  getNoteById = (noteId) => this.notes.find((note) => note.id === noteId);

  deleteNote = async (noteId) => {
    try {
      await axios.delete(`http://localhost:8000/notes/${noteId}`);
      this.notes = this.notes.filter((note) => note.id !== +noteId);
    } catch (error) {
      console.log("Notestore -> fetchNotes -> error", error);
    }
  };
}

decorate(NoteStore, { notes: observable, loading: observable });

const noteStore = new NoteStore();
noteStore.fetchNotes();

export default noteStore;
