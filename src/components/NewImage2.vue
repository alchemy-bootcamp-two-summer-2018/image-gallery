<template>
  <form @submit.prevent="handleSubmit">
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
      <label>
        Url: <input v-model="url">
      </label>
    </p>
    <p>
      <button type="submit">{{ isNew ? 'Add' : 'Update' }}</button>
      <button v-if="onCancel" type="button" @click="onCancel">Cancel</button>
    </p>
  </form>
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
      id: '',
      title: '',
      description: '',
      url: '',
    };
  },
  computed: {
    isNew() {
      return this.image === undefined;
    }
  },
  created() {
    const image = this.image;
    if(this.isNew) return;

    this.id = image.id;
    this.title = image.title;
    this.description = image.description;
    this.url = image.url;
  },
  methods: {
    handleSubmit() {
      const image = {
        id: this.id,
        title: this.title,
        description: this.description,
        url: this.url
      };
      if(!this.isNew) {
        image.id = this.image.id;
      }

      this.onComplete(image);
    }
  }
};

</script>

<style>

</style>