<template>
    <div class="gallery-view">
      <button @click="Previous">Previous</button>
      <img :src="album.image[0].url"> 
      <button @click="Next">Next</button>
        <!-- <Album v-for="album in albums"
          :id="album.title"
          :album="album" -/> -->
    </div>
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
  width:500px;
}

</style>
