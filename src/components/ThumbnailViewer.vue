<template>
    <div class="thumbnail-body">
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

.thumbnail-body {
  padding: 50px 120px 50px 120px ;
  background: #e9e9e9;
  text-align:center;
  min-height: 500px;
}

.tile-view {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
  justify-content: center;
  align-items: stretch;
} 

</style>