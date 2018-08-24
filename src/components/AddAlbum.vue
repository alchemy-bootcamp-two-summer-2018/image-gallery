<template>
  <form v-on:submit.prevent="handleSubmit">
    <h1>Add an Album!</h1>
    <p>
      <label>
        Album Title: <input v-model="title" placeholder="Title">
      </label>
    </p>
    <p>
      <label>
        Description: <input v-model="description" placeholder="Description">
      </label>
    </p>
    <p>
      <button>Add Album</button>
    </p>
  </form>
</template>

<script>
export default {  
  props: {
    onAdd: Function
  },
  data() {
    return {
      title: '',
      description: ''
    };
  },
  methods: {
    handleSubmit() {
      const newAlbum = {
        title: this.title,
        description: this.description
      };
      this.onAdd(newAlbum);

      this.title = '';
      this.description = '';

    }
  }
};
</script>

<style>

</style>
