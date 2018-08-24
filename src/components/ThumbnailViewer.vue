<template>
    <main>
        <h1>This is a thumb.</h1>
        <img v-for="image in album.images"
          :key="image.id"
          :src="image.url">
    </main>
</template>

<script>
import Album from './Album.vue';

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
img {
  width: 200px;
}

</style>
