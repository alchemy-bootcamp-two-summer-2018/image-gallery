<template>
  <div class="gallery-view">
    <button
      :disabled="index <= 0"
      @click="prevImage"
      class="prev"
    >
      Previous Image
    </button>
    <ImageCard 
      :key="image.key"
      :image="image"
    />
    <button
      :disabled="index >= this.album.images.length - 1"
      @click="nextImage"
      class="next"
    >
    Next Image
    </button>
  </div>
</template>

<script>
import ImageCard from './ImageCard';

export default {

  props: {
    album: Object
  },
  components: {
    ImageCard
  },
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    image() {
      return this.album.images[this.index];
    },
  },
  methods: {
    prevImage() {
      this.index--;
    },
    nextImage() {
      this.index++;
    },
  }

};
</script>

<style scoped>

.gallery-view {
  display: grid;
  grid-template-areas: "prev content next";
  grid-template-columns: 25% 50% 25%;
}

.gallery-view li {
  padding: 10px;
  display: grid;
  grid-template-areas: "image text";
  grid-template-columns: 250px auto;
  margin: 0px auto;
  width: 100%;
}

.gallery-view li img {
  grid-area: image;
}

.gallery-view li section {
  grid-area: text;
}

.prev {
  grid-area: prev;
}

.next {
  grid-area: next;
}

button {
  height: 50%;
  width: 50%;
  justify-self: center;
  align-self: center;
  cursor: pointer;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin: 10px;
  padding: 6px;
  border-radius: 15px;
  color: white;
  text-decoration: none;
  box-shadow: 2px 2px 5px #223ee0;
  text-shadow: 1px 1px #223ee0;
  background-color: #000d55;
}
button:hover {
  background-color: rgb(92, 105, 250);
}
button:disabled {
  background-color: rgb(138, 138, 138);
}

</style>
