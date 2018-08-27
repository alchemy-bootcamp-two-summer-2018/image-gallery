<template>
    <div class="gallery-flex">
          <button class="prev" @click="previousImage">Previous</button>
        <div class ="gallery-image">
          <h3> {{ images[this.index].title }} </h3>
          <img :src="images[this.index].url">
          <p class="description"> {{ images[this.index].description }}</p>
        </div>
          <button class="next" @click="nextImage">Next</button>
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

  .gallery-image {
    border: 2px solid bisque;
    width: 80vw;
  }

  .gallery-image img {
    width: 100%;
    object-fit: cover;
  }

  .gallery-flex {
    display: flex;
    width: 100vw;
    margin-bottom: 40px;
  }

  h3,
  p {
    background-color: rgba(255, 228, 196, 0.322);
    margin: 0;
  }

  p {
    padding: 20px;
  }

  .next,
  .prev {
    margin: 0;
    padding: 0;
    width: 10vw;
    background-color: white;
    border: white;
  }

</style>
