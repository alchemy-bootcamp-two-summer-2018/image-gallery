<template>
  <li class="">
        <ImageItem v-if="album"
        v-for="image in album.images"
        :key="image.url"
        :image="image"
        /> 
  </li>

</template>

<script>
import ListItem from './ListItem';

export default {
  props: {
    album: Object
  },
  components: {
   ListItem
  }
};
</script>

<style>

</style>