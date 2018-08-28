<template>
    <ul class="list-view">
          <ListImage v-for="image in album.image"
          :key="image.id"
          :image="image"
          :src="image.url"
          />
    </ul>

</template>

<script>
import Album from './Album';
import ListImage from './ListImage';

export default {
  props: {
    album: Object
  },
  components: {
    Album,
    ListImage
  }
};
</script>

<style>

</style>