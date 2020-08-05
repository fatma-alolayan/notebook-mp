import { decorate, observable } from "mobx";
import axios from "axios";
import notebooks from "../notebooks";
class NotebookStore {
  _notebooks = notebooks;

  fetchNotebooks = async () => {
    // try {
    //   const response = await axios.get("http://localhost:8000/notebooks");
    //   this.notebooks = response.data;
    // } catch (error) {
    //   console.error("NotebookStore -> fetchNotebooks -> error", error);
    // }
  };

  createNotebook = async (newNotebook) => {
    try {
      const formData = new FormData();
      for (const key in newNotebook) formData.append(key, newNotebook[key]);
      const res = await axios.post("http://localhost:8000/notebooks", formData);
      this.notebooks.push(res.data);
    } catch (error) {
      console.log("NotebookStore -> fetchNotebooks -> error", error);
    }
  };

  updateNotebook = async (updatedNotebook) => {
    try {
      const formData = new formData();
      for (const key in updatedNotebook)
        formData.append(key, updatedNotebook[key]);
      await axios.put(
        `http://localhost:8000/notebooks/${updatedNotebook.id}`,
        formData
      );
      const notebook = this.notebooks.find(
        (notebook) => notebook.id === updatedNotebook.id
      );
      for (const key in updatedNotebook) notebook[key] = updatedNotebook[key];
    } catch (error) {
      console.log("NotebookStore -> fetchNotebooks -> error", error);
    }
  };

  deleteNotebook = async (notebookId) => {
    try {
      await axios.delete(`http://localhost:8000/notebooks/${notebookId}`);
      this.notebooks = this.notebooks.filter(
        (notebook) => notebook.id !== +notebookId
      );
    } catch (error) {
      console.log("NotebookStore -> fetchNotebooks -> error", error);
    }
  };
}

decorate(NotebookStore, { notebooks: observable });

const notebookStore = new NotebookStore();
notebookStore.fetchNotebooks();

export default notebookStore;
