<template>
    <div class="gallery">
        <GalleryItem v-if="image"
        :key="image.id"
        :image="image"
        /> 
      <button v-on:click= "handleClick">Next Image</button>
    </div>
</template>

<script>
import GalleryItem from './GalleryItem';

export default {
  props: {
    album: Object
  },
  components: {
    GalleryItem
  },
  data() {
    return {
      image: this.album.images[0],
      currentImage: 0
    };
  },

  methods :{
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

img {
  height: 500px;
}

</style>