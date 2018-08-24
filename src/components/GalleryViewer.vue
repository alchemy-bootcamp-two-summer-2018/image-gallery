<template>
    <ul class="gallery-view">
        <Album v-for="album in albums"
          :id="album.title"
          :album="album"
        />
    </ul>
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
