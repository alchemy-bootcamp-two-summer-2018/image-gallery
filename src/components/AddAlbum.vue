<template>
  <div class="add-album-body">
    <AlbumForm :onAdd="handleAdd"
                :album="album"/>
  </div>
</template>

<script>
import AlbumForm from './AlbumForm.vue';
import albumsApi from '../services/albumsApi';

export default {
  props: {
    album: Object
  },
  components: {
    AlbumForm
  },
  methods: {
    handleAdd(album) {
      const added = albumsApi.addAlbum(album);
      this.$router.push(`/albums/${added.id}`);
      
    }
  }
};
</script>

<style>
.add-album-body{
  background:#e9e9e9;
  display: flex;
  justify-content: center;
  padding: 50px 100px 50px 100px;
}

</style>