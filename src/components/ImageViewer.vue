<template>

  <div class="image-viewer">
    <section v-if="image">
      <p v-if="!editing">
        <button @click="editing = true">Edit</button>
      </p>

      <ImageForm 
        v-if="editing" 
        :image="image"
        :onComplete="handleUpdate"
        :onCancel="handleEndEdit"      
      />

      <ImageDisplay v-else :image="image"/>
      
    </section>

    <section v-else>
      <NewImage
      
      />
    </section>
  </div>
</template>

<script>
import NewImage from './NewImage.vue';
import ImageForm from './ImageForm.vue';
import ImageDisplay from './ImageDisplay.vue';
import albumApi from '../services/albumApi.js';

export default {
  props: {
    image: Object,
    onUpdate: Function
  },
  data() {
    return { 
      editing: false
    };
  },
  watch: {
    image(newImage, oldImage) {
      if(newImage !== oldImage) {
        this.editing = false;
      }
    }
  },
  components: {
    NewImage,
    ImageDisplay,
    ImageForm
  },
  methods: {
    handleEndEdit() {
      this.editing = false;
    },
    handleUpdate(image) {
      this.onUpdate(image);
      this.handleEndEdit();
    },
    handleAdd(image) {
      const added = albumApi.addAlbum(image);
      this.$router.push(`/albums/${added.key}`); //fix this line
    },
  }
};
</script>

<style scoped>

</style>
