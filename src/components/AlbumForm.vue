<template>
  <form @submit.prevent="handleSubmit">
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
      <button type="submit">Add Album</button>
    </p>
  </form>
</template>

<script>
import shortid from 'shortid';

export default {
  props: {
    onAdd: Function,
  },
  data() {
    return {
      id: '',
      title: '',
      description: '',
      images: [],
    };
  },
  methods: {
    handleSubmit() {
      const album = {
        id: shortid.generate(),
        title: this.title,
        description: this.description,
        images: this.images
      };
      this.onAdd(album);
      this.$router.push(`/albums/${album.id}/new`);
    }
  }
};

</script>

<style>

</style>