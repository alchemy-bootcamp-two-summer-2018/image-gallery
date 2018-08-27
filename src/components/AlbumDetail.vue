<template>
  <div class="detail" v-if="album">
    <h2>Album Title: {{ album.title }}</h2>
    <router-link class="router-link views" :to="`/albums/${album.key}/thumbnail`">Thumbnail View</router-link>
    <router-link class="router-link views" :to="`/albums/${album.key}/list`">List View</router-link>
    <router-link class="router-link views" :to="`/albums/${album.key}/gallery`">Gallery View</router-link>
    <router-link class="router-link views" :to="`/albums/${album.key}/new`">Add Image to this Album</router-link>
    <h3>Album Description:</h3>
    <p class="description">{{ album.description }}</p>
    <router-view :onAdd="handleAdd" :images="album.images"></router-view>
  </div>
</template>

<script>
import albumApi from '../services/albumApi.js';

export default {
  data() {
    return {
      album: null,
    };
  },
  created() {
    this.album = albumApi.getAlbum(this.$route.params.key);
  },
  methods: {
    handleAdd(newImage) {
      this.album.images.push(newImage);
      console.log('new image', newImage);
    }
  }

};
</script>

<style scoped>

.detail h2 {
  margin-bottom: 20px;
}

</style>

