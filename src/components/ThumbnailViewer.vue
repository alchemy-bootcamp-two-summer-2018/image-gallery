<template>
    <div class="thumbnail">
        <ul class="tile-view">
        <ImageItem v-if="album"
        v-for="image in album.images"
        :key="image.url"
        :image="image"
        /> 
       </ul>

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