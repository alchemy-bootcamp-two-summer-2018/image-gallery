<template>
<main>
    <h1>This is one of the many many albums</h1>

    <p>
        <router-link to="thumbnail"> View a thumb </router-link>
    </p>

    <p>
        <router-link to="gallery"> View a Gallery </router-link>
        <router-link to="list"> View a List of Albums </router-link>
    </p>

    <p>
        <router-link to="newimage"> Add a New Image </router-link>
    </p>

    <router-view :album="album"></router-view>
  </main>
    
</template>

<script>
import albumApi from '../assets/albumApi.js';

export default {
  data() {
    return {
      // album: albumApi.getAlbum(id)
      // album: null
    };
  },
  created() {
    this.album = albumApi.getAlbum(this.$route.params.id);
  }
};

</script>

<style>

</style>
