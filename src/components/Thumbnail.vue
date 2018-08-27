<template>
  <div class="thumbnail-view">
      <AlbumImage v-for="image in images"
      :key="image.key"
      :image="image"/>
  </div>
</template>

<script>
import AlbumImage from './AlbumImage.vue';
export default {
  props: {
    images: Array
  },
  components: {
    AlbumImage
  }
};
</script>

<style>

  .thumbnail-view p {
    display: none;
  }

  .thumbnail-view {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));
    grid-gap: 20px;
    margin: 20px;
  }

  .animal-image {
    border: 2px solid bisque;
    max-width: 500px;
    background-color: rgb(218, 214, 214);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
  }

  .animal-image img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  .thumbnail-view h3 {
    padding-top: 15px;
  }

</style>

