<template>
    <div class="thumbnail">
        <ul class="tile-view">
        <ImageItem v-if="album"
        v-for="image in album.images"
        :key="image.id"
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

<style scoped>

/* ul.tile-view {
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

li {
  list-style: none;
  text-align: center;
  border: 1px solid #aaa;
  padding-top: 60px;
}

a {
  text-decoration: none;
  color: initial;
} */


</style>