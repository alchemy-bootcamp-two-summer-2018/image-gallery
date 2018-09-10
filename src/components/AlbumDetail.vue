<template>
    <main>
        <h1>Album Detail</h1>
        <p>{{ album.title }}</p>
        <nav>
            <router-link :to="`/albums/${album.id}/thumbnail`">Thumbnail</router-link>
            <router-link to="gallery">Gallery</router-link>
            <router-link to="list">List</router-link>
            <router-link to="new">New Image</router-link>
        </nav>
          
          
<router-view :album="album"></router-view>

    </main>
    
</template>

<script>
import albumsApi from '../services/albumsApi';

export default {
  data() {
    return { 
      album: this.album
    };
  },
  created() {
    this.album = albumsApi.getAlbum(this.$route.params.id);
  }
};
</script>
<style>
</style>
