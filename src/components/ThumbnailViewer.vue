<template>
    <main>
        <h1>This is a thumb.</h1>
        <div class="img-grid">
          <img v-for="image in album.images"
            :key="image.id"
            :src="image.url">
        </div>
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
.img-grid {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto auto;
  align-items: center
  
}
img {
  width: 200px;
  justify-self: center;
  
}

</style>
