<template>
    <ul class="list-view">
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

<style>

</style>