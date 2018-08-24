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
      this.album.images.push(image);
      albumsApi.updateAlbum(this.album);
      this.$router.push(`/albums/${this.album.id}`);
    }
  }
};
</script>

<style>

</style>