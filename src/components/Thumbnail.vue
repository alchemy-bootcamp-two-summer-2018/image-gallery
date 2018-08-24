<template>
<div class="thumbnail-view">
    <Image v-for="image in images"
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

</style>
