<template>
  <ul class="list-view">
    <ImageCard v-for="image in album.images"
    :key="image.key"
    :image="image"
    />
  </ul>
</template>

<script>
import ImageCard from './ImageCard';

export default {
  props: {
    album: Object
  },
  components: {
    ImageCard
  }
};
</script>

<style scoped>

ul.list-view {
  display: block;
  text-align: left;
}

ul.list-view li {
  display: grid;
  grid-template-areas: "image text";
  grid-template-columns: 250px auto;
  margin: 15px auto;
  width: 65%;
}

ul.list-view li img {
  grid-area: image;
}

ul.list-view li section {
  grid-area: text;
}

li {
  padding: 10px;
}

</style>
