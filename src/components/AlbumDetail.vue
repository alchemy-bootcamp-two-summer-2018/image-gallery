<template>
    <div class="detail-nav">
        <section v-if="album">
        <router-link to="`/albums/${album.id}/thumbnail`">Thumbnail View</router-link>
        <router-link to="`/albums/${album.id}/gallery`">Gallery View</router-link>
        <router-link to="`/albums/${album.id}/list`">List View</router-link>

        <h3>Album Title: {{ album.title }}</h3>
        <p>Album Description: {{ album.description }}</p>


          <h3 class="add-new">
            <router-link to="`/albums/${album.id}/new`">Add New Image</router-link>  
          </h3>
  
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