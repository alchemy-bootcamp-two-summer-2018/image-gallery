<template>
    <div class="gallery-view">
        <div class ="gallery-flex">
          <button class="next" @click="nextImage">Next</button>
          <button class="prev" @click="previousImage">Previous</button>
          <div>
            <h3> {{ images[this.index].title }} </h3>
            <img :src="images[this.index].url">
          <div>
        </div>
        <p class="description"> {{ images[this.index].description }}</p>
    </div>
</template>

<script>

export default {
  props: {
    images: Array
  },
  data() {
    return {
      index: Number
    };
  },
  created() {
    // this.image = this.images[0];
    this.index = 0;
  },
  methods: {
    nextImage() {
      if(this.index === this.images.length - 1) {
        return this.index = 0;
      } else {
        this.index++;
      }
      return this.index;
    },
    previousImage() {
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

<style scoped>




</style>
