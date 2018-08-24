<template>
    <div class="thumbnail">
        <ul class="tile-view">
        <ImageItem v-if="album"
        v-for="image in album.images"
        :key="image.url"
        :image="image"
        /> 

       </ul>
    </div>
</template>

<script>
import ImageItem from './ImageItem';

export default {
  props: {
    album: Object
  },
  components: {
    ImageItem
  }
};
</script>

<style>

ul.tile-view {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
  padding-left: 0;
}