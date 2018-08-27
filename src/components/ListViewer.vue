<template>
     <div class="list-view">
      <AlbumImage v-for="image in images"
      :key="image.key"
      :image="image"/>
  </div>
</template>

<script>
import AlbumImage from './AlbumImage.vue';

export default {
  props: {
    images: Array
  },
  components: {
    AlbumImage
  }

};
</script>

<style>

.list-view img {
  display: none;
}

.list-view .animal-image {
  border: 2px solid white;
  background-color: rgb(218, 214, 214);
  margin: 0 auto;
}

</style>
