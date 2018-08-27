<template>

  <div class="album-viewer">
    <section v-if="album">
      <p v-if="!editing">
        <button @click="editing = true">Edit</button>
      </p>

      <AlbumForm 
        v-if="editing" 
        :album="album"
        :onComplete="handleUpdate"
        :onCancel="handleEndEdit"      
      />

      <AlbumDisplay v-else :album="album"/>
      
    </section>

    <section v-else>
      <AddAlbum
      
      />
    </section>
  </div>
</template>

<script>
import AddAlbum from './AddAlbum.vue';
import AlbumForm from './AlbumForm.vue';
import AlbumDisplay from './AlbumDisplay.vue';

export default {
  props: {
    album: Object,
    onUpdate: Function
  },
  data() {
    return { 
      editing: false
    };
  },
  watch: {
    album(newAlbum, oldAlbum) {
      if(newAlbum !== oldAlbum) {
        this.editing = false;
      }
    }
  },
  components: {
    AlbumForm,
    AlbumDisplay,
    AddAlbum
  },
  methods: {
    handleEndEdit() {
      this.editing = false;
    },
    handleUpdate(album) {
      this.onUpdate(album);
      this.handleEndEdit();
    },
  }
};
</script>

<style scoped>

</style>
