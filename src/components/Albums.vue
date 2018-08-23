<template>
  <main>
    <h2>Albums</h2>
    
    <p>
      <router-link to="/albums/new">Add a new album</router-link>
    </p>


    <router-view :albums="albums"></router-view>

  </main>
</template>

<script>
import albumsApi from '../services/albumsApi';

export default {
  data() {
    return {
      albums: albumsApi.getAlbums()
    };
  },
  components: {
  }
};
</script>

<style scoped>

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}
</style>