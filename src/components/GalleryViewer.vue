<template>
    <div class="gallery">
        <GalleryItem v-if="image"
        :key="image.id"
        :image="image"
        /> 
    </div>
</template>

<script>
import GalleryItem from './GalleryItem';

export default {
  props: {
    album: Object
  },
  components: {
    GalleryItem
  },
  data() {
    return {
      image: this.album.images[0]
    };
  },
};
</script>

<style scoped>

/* ul.tile-view {
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

li {
  list-style: none;
  text-align: center;
  border: 1px solid #aaa;
  padding-top: 60px;
}

a {
  text-decoration: none;
  color: initial;
} */


</style>