<template>
    <div class="detail-nav">
        <section v-if="album">
        <router-link to="`/albums/${album.id}/thumbnail`">Thumbnail View</router-link>
        <router-link to="`/albums/${album.id}/gallery`">Gallery View</router-link>
        <router-link to="`/albums/${album.id}/list`">List View</router-link>
        <router-link to="`/albums/${album.id}/add`">Add New Image</router-link>

        <h3>{{ album.title }}</h3>
        <p>{{ album.description }}</p>
        <p>{{ album.id }}</p>

        <p>
            <router-link :to="`/albums/${album.id}/edit`">Edit</router-link>
        </p>
        </section>
    </div>

</template>

<script>
import ThumbnailViewer from './ThumbnailViewer';
import albumsApi from '../services/albumsApi';

export default {
  data() {
    return {
      album: null
    };
  },
  components: {
    ThumbnailViewer
  },
  created() {
    this.album = albumsApi.getAlbum(this.$route.params.id);
    console.log(this.album.images);

  }
};

</script>

<style>

</style>