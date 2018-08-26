<template>
    <main>
        <h1>Gallery!</h1>
        <GalleryImage v-if="image"
          :key="image.id"
          :image="image"
          />
        <button v-on:click="handleNext">Next</button>
        <button v-on:click="handlePrevious">Previous</button>
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
    handleNext: function(){
      this.currentImage ++;

      if(this.currentImage === this.album.images.length) {
        this.currentImage = 0;
      }
      this.image = this.album.images[this.currentImage];
    },
    handlePrevious: function(){
      this.currentImage --;

      if(this.currentImage < 0) {
        this.currentImage = (this.album.images.length - 1);
      }
      this.image = this.album.images[this.currentImage];
    }
  }
};
</script>

<style>

</style>
