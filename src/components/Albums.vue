<template>
  <div>
    <h2>Albums</h2>
    <div class="albums">
    <Album v-for="album in albums"
      :key="album.key"
      :album="album"
    />
    <router-link class="router-link link-button" to="/albums/new">Add An Album</router-link>
    </div>
    <router-view :onAdd="addAlbum"></router-view>
  </div>
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
  methods: {
    addAlbum(album) {
      this.albums.push(album);
      return album;
    }
  }
};
</script>

<style scoped>

.router-link {
  display: block;
  width: fit-content;
  margin: 20px auto;
}

</style>
