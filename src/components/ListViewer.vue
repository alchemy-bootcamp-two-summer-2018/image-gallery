<template>
<div class="list-item">
  <li>
        <ListItem v-if="album"
        v-for="image in album.images"
        :key="image.url"
        :image="image"
        /> 
  </li>
</div>

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

.list-item {
  max-width: 1200px;
    display: flex;
    justify-content: center;
    flex-direction:column;
    padding:20px;
}
li  {
  list-style: none;
}
</style>