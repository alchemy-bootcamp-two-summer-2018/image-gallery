<template>
    <ul class="thumbnail-view"> 
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
img {
  width:200px;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}

</style>