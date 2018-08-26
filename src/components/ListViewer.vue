<template>
<div class="list-body">
  <div class="list">
    <ul>
          <ListItem v-if="album"
          v-for="image in album.images"
          :key="image.url"
          :image="image"
          /> 
    </ul>
  </div>
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


.list-body {
  padding: 50px 100px 50px 100px;
  background: #e9e9e9;
}

.list {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  padding-left: 0;
  justify-content: center;
}


</style>