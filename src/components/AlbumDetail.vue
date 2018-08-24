<template>
    <div class="detail-nav">
        <section v-if="album">
        <router-link to="thumbnail">Thumbnail View</router-link>
        <router-link to="gallery">Gallery View</router-link>
        <router-link to="list">List View</router-link>
        <router-link to="new">Add New Image</router-link>

        <h3>Album Title: {{ album.title }}</h3>
        <p>Album Description: {{ album.description }}</p>
  
        <router-view :album="album"></router-view>
        </section>
    </div>

</template>

<script>
import albumsApi from '../services/albumsApi';

export default {
  data() {
    return {
      album: null
    };
  },
  created() {
    this.album = albumsApi.getAlbum(this.$route.params.id);
  }
};

</script>

<style>


</style>