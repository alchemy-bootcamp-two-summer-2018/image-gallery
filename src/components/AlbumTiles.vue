<template>
  <ul class="tile-view">
    <Album v-for="album in albums"
      :key="album.title"
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

<style scoped>

ul.tile-view {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}
</style>