<template>
    <main>
        <h1>Album Detail</h1>
        <p>{{ album.title }}</p>
            <router-link to="/thumbnail">Thumbnail</router-link>
            <router-link to="/gallery">Gallery</router-link>
            <router-link to="/list">List</router-link>
            <router-link to="/new">New Image</router-link>

            <img :src="album.image[0].url">
    </main>
</template>

<script>
import albumsApi from '../services/albumsApi';

export default {
  data() {
    return {
    };
  },
  created() {
    this.album = albumsApi.getAlbum(this.$route.params.id);
  }
};
</script>
<style>
</style>
