<template>
  <ImageForm 
    :onComplete="handleAdd"
    :onCancel="handleEndEdit"
    :onUpdate="handleUpdate"
    :image="image"
    :album="album"
  />
</template>

<script>
import ImageForm from './ImageForm.vue';
import albumApi from '../services/albumApi';

export default {
  props: {
    album: Object,
  },
  components: {
    ImageForm
  },
  methods: {
    handleAdd(key, image, album) {
      const added = albumApi.addImage(album.key, image); //where to get key?
      this.$router.push(`/albums/${added.key}`); //this isn't right
    }
  }
};
</script>

<style>

</style>
