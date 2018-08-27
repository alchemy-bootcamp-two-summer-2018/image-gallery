<template>
<script>
export default {

};
<main>
  <h1>Add Album</h1>
        <router-link :to="`/addAlbum/$`">
        </router-link>
  <form v-on:submit.prevent="handleSubmit">
    <p>
      <label>
        Title <input v-model="title" placeholder="Album Title">
      </label>
    </p>
    <p>
      <label>
        Description: <input v-model="description" placeholder="Album Description">
      </label>
    </p>
    <p>
      <label>
        URL: <input v-model="url" placeholder="Album URL">
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
      description: '',
      url: ''
    };
  },
  methods: {
    handleSubmit() {
      const newAlbum = {
        title: this.title,
        description: this.description,
        url: this.url
      };
      this.onAdd(newAlbum);
      
      this.title = '';
      this.description = '';
      this.url = '';
    }
  }
};
</main>
</template>
</script>

<style>
</style>