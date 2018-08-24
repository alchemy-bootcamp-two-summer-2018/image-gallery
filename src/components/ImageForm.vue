<template>
  <form @submit.prevent = "handleSubmit">
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
      <button type="submit">Add Image</button>
    </p>
  </form>
</template>

<script>
export default {

  props:{
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
    handleSubmit() {
      console.log('helleo');
      const image = {
        id: this.id,
        title: this.title,
        description: this.description,
        url: this.url,

      };
      this.onAdd(image);
    }
  }
};

</script>

<style>

</style>
