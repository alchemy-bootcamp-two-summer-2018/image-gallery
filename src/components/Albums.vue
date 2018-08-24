<template>
  <main>
    <h1>ALBUMZZZZZZ</h1>
    <ul>
      <Album v-for="album in albums"
        :album="album"
        :key="album.id"
        :title="album.title"
        :description="album.description"
      />
    </ul>
  </main>
</template>

<script>
import albumApi from '../assets/albumApi.js';
import Album from './Album.vue';

export default {
  data() {
    return {
      albums: albumApi.getAlbums()
    };
  },
  components: {
    Album
  }
};
</script>

<style>

</style>
z