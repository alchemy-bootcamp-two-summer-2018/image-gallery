<template>
    <div class="gallery-view">
        <img :src="album.image[0].url">
        <!-- <Album v-for="album in albums"
          :id="album.title"
          :album="album" -/> -->
    </div>
</template>

<script>
import Album from './Album';

export default {
  props: {
    albums: Array
  },
  components: {
    Album
  }
};
</script>

<style>

</style>
