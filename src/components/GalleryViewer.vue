<template>
<div class="gallery-body">
    <div class="gallery">
        <GalleryItem v-if="image"
        :key="image.id"
        :image="image"
        /> 
      <button class="gallery-button" v-on:click= "handleClick">Next Image<img class="arrow-image" :src="('/arrow.png')" /></button>
    </div>
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

.gallery-body{
  padding: 50px 100px 50px 100px;
  background: #e9e9e9;
}

.arrow-image {
  margin-bottom:-2px;
  margin-left:15px;
  width:20px;
}

.gallery {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 0px;
  padding-left: 0;
  justify-content: center;
}

.gallery-button {
  border: none;
  padding:20px;
  font-size: 17px;
  font-family: 'Open Sans';
  text-transform: uppercase;
  letter-spacing: 2px;

}


</style>