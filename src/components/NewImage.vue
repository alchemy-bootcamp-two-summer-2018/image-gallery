<template>
    <form v-on:submit.prevent="handleNewImage">
        <h1>Add a new image</h1>
        <p>
          <label>
              Image Title: <input v-model="title" placeholder="Title">
          </label>
        </p>
        <p>
          <label>
              Description: <input v-model="description" placeholder="Description">
          </label>
        </p>
        <p>
          <label>
            Image URL: <input v-model="url" placeholder="URL">
          </label>
        </p>
        <p>
        <button>Add</button>
        </p>
  </form>
</template>

<script>
import albumApi from '../assets/albumApi.js';

export default {
  data() {
    return {
      title: '',
      description: '',
      url: ''
    };
  },
  props: {
    album: Object
  },
  methods: {
    handleNewImage() {
      const newImage = {
        title: this.title,
        description: this.description,
        url: this.url
      };
      this.onAddImage(newImage);

      this.title = '';
      this.description = '';
      this.url = '';
    },
    onAddImage(image) {
      albumApi.addImage(this.album.id, image);
      this.$router.push(`/albums/${this.album.id}`);
    }

  }
};
</script>

<style>

</style>
