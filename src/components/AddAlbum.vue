<template>
    <div>
        <h2>Add An Album</h2>
        <form @submit.prevent="handleSubmit">
            <p>Album Title<br/>
                <input v-model="title" placeholder="Image Title">
            </p>
            <p>Album Description<br/>
                <input v-model="description" placeholder="Image Description">
            </p>
            <button>Add</button>
            <button type="button">Cancel</button>
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
      images: ''
    };
  },
  methods: {
    handleSubmit() {
      const newAlbum = {
        key: shortid.generate(),
        title: this.title,
        description: this.description,
        images: []
      };
      this.onAdd(newAlbum);
    }
  }
};
</script>

<style>

</style>

