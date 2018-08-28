<template>
    <div class="gallery-view">
      <button @click="Previous">Previous</button>
      <img :src="album.image[0].url"> 
      <button @click="Next">Next</button>
      <h1>{{ image[this.index].title }}</h1> 
      <img :src="images[this.index].url">        
<!-- <Album v-for="album in albums"
          :id="album.title"
          :album="album" -/> -->
    </div>
</template>

<script>
//import Album from './Album';

export default {
  props: {
    images: Array
  },
  data() {
    return {
      index:Number
    };
  },
  created() {
    this.index = 0;
  },
  methods: {
    Previous() {
      if(this.index === this.images.length - 1) {
        return this.index = 0;
      } else {
        this.index++;
      }
      return this.index;
    },
    Next() {
      if(this.index === 0) {
        return this.index = this.images.length - 1;
      } else {
        this.index--;
      }
      return this.index;
    }
  }
};

</script>

<style>
img {
  width:500px;
}

</style>
