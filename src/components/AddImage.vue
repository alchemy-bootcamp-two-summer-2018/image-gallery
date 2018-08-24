<template>
  <ImageForm :onAdd="handleAdd"
              :image="image"/>
</template>

<script>
import ImageForm from './ImageForm.vue';
import albumsApi from '../services/albumsApi';

export default {
  props: {
    image: Object,
    album: Object
  },
  components: {

    ImageForm,
  },

  methods: {
    handleAdd(image) {
      const added = albumsApi.addImage(this.album, image);
      this.$router.push(`/albums/${added.id}`);
      console.log('image', image);
      
    }
  }
};
</script>

<style>

</style>