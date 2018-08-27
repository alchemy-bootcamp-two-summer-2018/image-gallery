<template>
    <div>
        <h2>Add Image to Album</h2>
        <form @submit.prevent="handleSubmit">
            <p>Image Title<br/>
                <input v-model="title" placeholder="Image Title">
            </p>
            <p>Image Description<br/>
                <input v-model="description" placeholder="Image Description">
            </p>
            <p>Image URL<br/>
                <input v-model="url" placeholder="Image URL">
            </p>
            <button>Add</button>
        </form>
    </div>
</template>

<script>
import shortid from 'shortid';

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      key: '',
      title: '',
      description: '',
      url: ''
    };
  },
  methods: {
    handleSubmit() {
      const newImage = {
        key: shortid.generate(),
        title: this.title,
        description: this.description,
        url: this.url
      };
      this.onAdd(newImage);
    }
  }
};
</script>

<style>

</style>
