<template>
  <main>
    <h1>Albums</h1>
  </main>
</template>

<script>
import albumApi from '../services/albumApi.js';
import Album from './Album.vue';
export default {
  data() {
    return {
      albums: albumApi.getAlbums()
    };
  },
  components: {
    Album
  },
};
</script>

<style>

</style>
