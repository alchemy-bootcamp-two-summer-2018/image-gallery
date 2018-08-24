<template>
  <main>
    <h1>Albums</h1>
    <router-link class="router-link" to="/albums/new">Add An Album</router-link>
    <Album v-for="album in albums"
      :key="album.key"
      :album="album"
    />
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
