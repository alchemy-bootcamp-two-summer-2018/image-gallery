<template>
  <form @submit.prevent = "handleSubmit">
    <h2>Add Your Image</h2> 
    <p>
      <label>
        <input placeholder="Title" v-model="title" required>
      </label>
    </p>
    <p>
      <label>
       <input placeholder="Description" v-model="description" required>
      </label>
    </p>
    <p>
      <label>
        <input placeholder="URL" v-model="url" required>
      </label>
    </p>
    <p>
      <button type="submit">Add New Image</button>
    </p>
  </form>
</template>

<script>
import shortid from 'shortid';
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
      console.log('hello');
      const image = {
        id: shortid.generate(),
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