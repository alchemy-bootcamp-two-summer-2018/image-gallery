<template>
  <div class="add-image-body">
    <ImageForm :onAdd="handleAdd"
                :image="image"/>
  </div>
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

<style scoped>

.add-image-body{
  background:#e9e9e9;
  display: flex;
  justify-content: center;
  padding: 50px 100px 50px 100px;
}


</style>