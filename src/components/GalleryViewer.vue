<template>
    <main>
        <h1>Gallery!</h1>
        <GalleryImage v-if="image"
          :key="image.id"
          :image="image"
          />
        <button v-on:click="handleClick">Next</button>
    </main>
</template>

<script>
import GalleryImage from './GalleryImage.vue';

export default {
  props: {
    album: Object
  },
  components: {
    GalleryImage
  },
  data() {
    return {
      image: this.album.images[0],
      currentImage: 0
    };
  },
  methods: {
    handleClick: function(){
      this.currentImage += 1;

      if(this.currentImage === this.album.images.length) {
        this.currentImage = 0;
      }
      this.image = this.album.images[this.currentImage];
    }
  }
};
</script>

<style>

</style>
