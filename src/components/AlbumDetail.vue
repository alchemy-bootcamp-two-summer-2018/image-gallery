<template>
    <main>
        <h1>Album Detail</h1>
        <p>{{ album.title }}</p>
            <router-link :to="`/AlbumDetail/$`"> 
            </router-link>
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
