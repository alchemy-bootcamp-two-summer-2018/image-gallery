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

.list-view {
  border-color: white;
}

</style>
