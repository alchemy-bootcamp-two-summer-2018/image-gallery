<template>
    <main>
        <h1>Album Detail</h1>
        <p class="title">{{ album.title }}</p>
        <nav>
          <p>
            <router-link :to="`/albums/${album.id}/thumbnail`">Thumbnail</router-link>
          </p>
          <p>
            <router-link :to="`/albums/${album.id}/gallery`">Gallery</router-link>
          </p>
          <p>
            <router-link :to="`/albums/${album.id}/list`">List</router-link>
          </p>
          <p>
            <router-link :to="`/albums/${album.id}/new`">New Image</router-link>
          </p>
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
.title {
  font-size: 20px;
}
</style>
