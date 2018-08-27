<template>
  <form @submit.prevent="handleSubmit">
     <h1>Create You Album</h1>
        <p>Enter in your Ablum Title & Description Below</p>
    <p>
      <label>
        <input placeholder="*Title" v-model="title" required>
      </label>
    </p>
    <p>
      <label>
         <input placeholder="*Description" v-model="description" required>
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

<style scoped>

form {
  background: white;
  padding: 30px;
  box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
}

p {
  text-align: center;
  text-transform: uppercase;

}

button {
    background: #fa504d;
    border: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 20px;
    font-weight: 600;
    box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
    transition: all .2s ease-in-out;
}

button:hover {
    transform: scale(1.1); 
}

</style>