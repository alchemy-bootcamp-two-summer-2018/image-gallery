<template>
  <form @submit.prevent="handleSubmit(album)">
    <p>
      <label>
        Title: <input v-model="title">
      </label>
    </p>
    <p>
      <label>
        Description: <input v-model="description">
      </label>
    </p>

        <p>
      <label>
        Url: <input v-model="url">
      </label>
    </p>
    <p>
      <button type="submit">Add</button>
    </p>
  </form>
</template>

<script>
// import shortid from 'shortid';

export default {
  props: {
    album: Object,
    onAdd: Function,
  },
  data() {
    return {
      id: '',
      title: '',
      description: '',
      url: '',
    };
  },
  methods: {
    handleSubmit(album) {
      const image = {
        id: this.title,
        // album.id = shortid.generate();
        title: this.title,
        description: this.description,
        url: this.url
      };
      album.images.push(image);
      this.onAdd(album);
    }
  }
};

</script>

<style>

</style>