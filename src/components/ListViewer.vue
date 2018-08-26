<template>
    <ul class="list-view">
          <Album v-for="image in album.image "
          :key="image.id"
          :src="image.url"
          />
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