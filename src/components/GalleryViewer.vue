<template>
    <div class="gallery-view">
        <button @click="nextImage">Next</button>
        <button>Previous</button>
        <img :src="images[this.index].url">
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
      this.index++;
      // let image = this.image[nextIndex];
      console.log('hey im an index', this.index);
      return this.index;
    }
  }
};
</script>

<style>

</style>
