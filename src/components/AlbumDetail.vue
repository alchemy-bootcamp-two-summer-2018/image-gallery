<template>
    <div class="detail-nav">
        <router-link to="/thumbnail">Thumbnail View</router-link>
        <router-link to="/gallery">Gallery View</router-link>
        <router-link to="/list">List View</router-link>
        <router-link to="/new">Add New Image</router-link>

        <section v-if="album">
        <h3>{{ album.title }}</h3>
        <p>{{ album.description }}</p>

        <ul class="tile-view">
        <ImageItem v-for="image in album.images"
        :key="image.url"
        :image="image"
        /> 
       </ul>

        <p>
            <router-link :to="`/albums/${album.id}/edit`">Edit</router-link>
        </p>
        </section>
    </div>

</template>

<script>
import albumsApi from '../services/albumsApi';
import ImageItem from './ImageItem';

export default {
  data() {
    return {
      album: null
    };
  },
  components: {
    ImageItem
  },
  created() {
    this.album = albumsApi.getAlbum(this.$route.params.id);
    console.log(this.album.images);
  }
};
</script>

<style>
ul.tile-view {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
  padding-left: 0;
}
</style>