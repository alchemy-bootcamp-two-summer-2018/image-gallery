<template>
  <ul class="tile-view">
    <ImageCard v-for="image in album.images"
    :key="image.key"
    :image="image"
    />
  </ul>
</template>

<script>
import ImageCard from './ImageCard';

export default {
  props: {
    album: Object
  },
  components: {
    ImageCard
  }
};
</script>

<style scoped>

ul.tile-view {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 25px;
}

li {
  padding: 10px;
}



</style>
