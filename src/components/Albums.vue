<template>
    <main>
        <h1>Albums</h1>
        <Album v-for="album in albums"
            :key="album.id"
            :album="album"
        />
            <router-link :to="`/albums/$`"> 
            </router-link>
    </main>
</template>

<script>
import albumsApi from '../services/albumsApi';
import Album from './Album';

export default {
  data() {
    return {
      albums: albumsApi.getAlbums()
    };
  },
  components: {
    Album
  },
};
</script>

<style>

</style>
