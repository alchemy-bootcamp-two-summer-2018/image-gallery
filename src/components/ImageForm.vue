<template>
  <form @submit.prevent = "handleSubmit">
    <h2>Add Your Image</h2> 
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
      <label>
        <input placeholder="*url" v-model="url" required>
      </label>
    </p>
    <p>
      <button type="submit">Add Image</button>
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
      console.log('helleo');
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

<style scoped>
form {
  background: white;
  padding: 30px;
  box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
  width: 700px;
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
