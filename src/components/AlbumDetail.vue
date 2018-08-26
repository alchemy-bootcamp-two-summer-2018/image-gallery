<template>
    <div>
      <section v-if="album">
        <h1>{{ album.title }}</h1>
        <p>{{ album.description }}</p>
          <div class="detail-nav">
              <router-link class="detail-nav-a" to="thumbnail">Thumbnail View</router-link>
              <router-link class="detail-nav-a" to="gallery">Gallery View</router-link>
              <router-link class="detail-nav-a" to="list">List View</router-link>
              <router-link class="detail-nav-a" to="new">Add New Image</router-link>
            </div>
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

<style scoped>

p {
  text-align: center !important;
  text-transform: uppercase;
}
.detail-nav{
  background: #e9e9e94f;
  padding: 20px;
  text-align: center;
}
.detail-nav-a {
  color: black;
  
}

</style>