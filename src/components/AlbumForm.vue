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
      <button type="submit">{{ isNew ? 'Add' : 'Update' }}</button>
      <button v-if="onCancel" type="button" @click="onCancel">Cancel</button>
    </p>
  </form>
</template>

<script>
export default {
  props: {
    album: Object,
    onComplete: Function,
    onCancel: Function
  },
  data() {
    return {
      id: '',
      title: '',
      description: '',
      images: [],
    };
  },
  computed: {
    isNew() {
      return this.album === undefined;
    }
  },
  created() {
    const album = this.album;
    if(this.isNew) return;

    this.id = album.id;
    this.title = album.title;
    this.description = album.description;
    this.images = album.images;
  },
  methods: {
    handleSubmit() {
      const album = {
        id: this.id,
        title: this.title,
        description: this.description,
        images: this.images
      };
      if(!this.isNew) {
        album.id = this.album.id;
      }

      this.onComplete(album);
    }
  }
};

</script>

<style>

</style>