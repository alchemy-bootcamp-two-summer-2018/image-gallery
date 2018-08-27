<template>
  <main>
    <h1>Add a new image</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form">
        <p>URL:</p>
        <input v-model="imageURL">
        <p>Title:</p>
        <input v-model="title">
        <p>Description:</p>
        <textarea v-model="description"></textarea>
      </div>
      <button type="submit">Add</button>
      <button v-if="onCancel" type="button" @click="onCancel">Cancel</button>
    </form>
  </main> 

</template>





<script>
export default {
  props: {
    album: Object,
    onComplete: Function,
    onCancel: Function,
  
  },
  data() {
    return {
      key: '',
      imageURL: '',
      title: '',
      description: '',
    };
  },
  created() {
    const image = this.image;
    this.imageURL = image.imageURL;
    this.title = image.title;
    this.description = image.description;
  },
  methods: {
    handleSubmit() {
      const image = {
        title: this.title,
        imageURL: this.imageURL,
        description: this.description,
      };
      this.onComplete(image);
    }
  }
};

</script>

<style scoped>

main {
  display: flex;
  flex-direction: column;
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

