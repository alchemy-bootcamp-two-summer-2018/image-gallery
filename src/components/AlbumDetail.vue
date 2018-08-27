<template>
<main>
    <div class="nav">    
        <p>
            <router-link to="thumbnail"> Thumbnails </router-link>
        </p>

        <p>
            <router-link to="gallery"> Gallery </router-link>
        </p>
        <p>
            <router-link to="list"> Image List</router-link>
        </p>

        <p>
            <router-link to="newimage"> Add a New Image </router-link>
        </p>
    </div>

    <router-view :album="album"></router-view>
  </main>
    
</template>

<script>
import albumApi from '../assets/albumApi.js';

export default {
  data() {
    return {
      // album: albumApi.getAlbum(id)
      // album: null
    };
  },
  created() {
    this.album = albumApi.getAlbum(this.$route.params.id);
  }
};

</script>

<style>
.nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

</style>
