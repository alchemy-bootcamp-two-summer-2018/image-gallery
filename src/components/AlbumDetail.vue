<template>
  <div v-if="album">
    <h1>{{ album.title }}</h1>
    <router-link :to="`albums/${album.key}/thumbnail`"></router-link>
    <h2>Description:</h2>
    <p>{{ album.description }}</p>
  </div>
</template>

<script>
import albumApi from '../services/albumApi.js';

export default {
  data() {
    return {
      album: null,
    };
  },
  created() {
    this.album = albumApi.getAlbum(this.$route.params.key);
  }

};
</script>

<style>

</style>

