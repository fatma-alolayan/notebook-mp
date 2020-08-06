import { decorate, observable } from "mobx";
import axios from "axios";

class TagStore {
  tags = [];
  loading = true;

  fetchTag = async () => {
    try {
      const response = await axios.get("http://localhost:8000/tag");
      this.tag = response.data;
      this.loading = false;
    } catch (error) {
      console.error("TagStore -> fetchTags -> error", error);
    }
  };

  createTag = async (newTag, note) => {
    try {
      const formData = new FormData();
      for (const key in newTag) formData.append(key, newTag[key]);
      const res = await axios.post(
        `http://localhost:8000/notes/${tag.id}/tag`,
        formData
      );
      const tag = res.data;
      this.tags.push(tag);
      note.tags.push(tag);
    } catch (error) {
      console.log("TagStore -> createTag -> error", error);
    }
  };

  updateTag = async (updatedTag) => {
    try {
      const formData = new FormData();
      for (const key in updatedTag) formData.append(key, updatedTag[key]);
      await axios.put(`http://localhost:8000/tag/${updatedTag.id}`, formData);
      const tag = this.tags.find((tag) => tag.id === updatedTag.id);
      for (const key in updatedTag) tag[key] = updatedTag[key];
    } catch (error) {
      console.log("TagStore -> updateTag -> error", error);
    }
  };

  getTagById = (tagId) => this.tags.find((tag) => tag.id === tagId);

  deleteTag = async (tagId) => {
    try {
      await axios.delete(`http://localhost:8000/tag/${tagId}`);
      this.tags = this.tags.filter((tag) => tag.id !== +tagId);
    } catch (error) {
      console.log("TagStore -> deleteTag -> error", error);
    }
  };
}

decorate(TagStore, { tags: observable, loading: observable });

const tagStore = new TagStore();
tagStore.fetchTag();

export default tagStore;
