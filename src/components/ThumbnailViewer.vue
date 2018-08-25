<template>
    <ul class="thumbnail-view"> 
        Album ThumbnailViewer
  <img v-for="image in album.image"
            :key="image.id"
            :src="image.url"/>
    </ul>
</template>

<script>
import Album from './Album';

export default {
  props: {
    album: Object
  },
  components: {
    Album
  }
};
</script>

<style>

</style>