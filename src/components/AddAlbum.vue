<template>
  <AlbumForm :onComplete="handleAdd"/>
</template>

<script>
import AlbumForm from './AlbumForm.vue';
import albumsApi from '../services/albumsApi';

export default {
  components: {
    AlbumForm
  },
  methods: {
    handleAdd(album) {
      const added = albumsApi.addAlbum(album);
      this.$router.push(`/albums/${added.id}`);
      
    }
  }
};
</script>

<style>

</style>