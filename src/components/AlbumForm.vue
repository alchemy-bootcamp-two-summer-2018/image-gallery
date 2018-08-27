<template>
  <main>
    <h1>Don't give us a bad name</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form">
        <p>Title:</p>
        <input v-model="title">
        <p>Description:</p>
        <textarea v-model="description"></textarea>
      </div>
      <button type="submit" > {{ isNew ? 'Add' : 'Update' }}</button>
      <button v-if="onCancel" type="button" @click="onCancel">Cancel</button>
    </form>
  </main> 

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
      key: '',
      title: '',
      description: ''
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

    this.title = album.title;
    this.description = album.description;
  },
  methods: {
    handleSubmit() {
      const album = {
        title: this.title,
        description: this.description
      };
      if(!this.isNew) {
        album.key = this.album.key;
      }
      this.onComplete(album);
    }
  }
};

</script>

<style scoped>

main {
  display: grid;

}

div.form {
  display: grid;
  grid-template-columns: auto auto;
}

button {
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  padding: 6px;
  border-radius: 15px;
  color: white;
  text-decoration: none;
  box-shadow: 2px 2px 5px #223ee0;
  text-shadow: 1px 1px #223ee0;
  background-color: #000d55;
}
button:hover {
  background-color: rgb(92, 105, 250);
}

</style>

