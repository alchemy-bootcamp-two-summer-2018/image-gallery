<template>
  <AlbumForm 
    class="add-album"
    :onComplete="handleAdd"
  />
</template>

<script>
import AlbumForm from './AlbumForm.vue';
import albumApi from '../services/albumApi';

export default {
  components: {
    AlbumForm
  },
  methods: {
    handleAdd(album) {
      const added = albumApi.addAlbum(album);
      this.$router.push(`/detail/${added.key}`);
    }
  }
};
</script>

<style>

</style>
