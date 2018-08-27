<template>
  <div class="dashboard">
    <Albums 
      :albums="albums" 
      :selected="selectedAlbum"
      :onSelect="handleSelect"
    />
    <AlbumViewer 
      :album="selectedAlbum"
      :onUpdate="handleUpdate"
    />
  </div>
</template>

<script>
import albumApi from '../services/albumApi';
import Albums from './Albums';
import AlbumViewer from './AlbumViewer';


export default {
  name: 'albumDashboard',
  data() {
    return {
      albums: albumApi.getAlbums(),
      selectedAlbum: null,
    };
  },
  components: {
    Albums,
    AlbumViewer,
  },
  methods: {
    handleSelect(album) {
      this.selectedAlbum = album;
    },
    handleUpdate(updated) {
      const index = this.albums.findIndex(album => {
        return album.key === updated.key;
      });

      if(index !== -1) {
        this.albums.splice(index, 1, updated);
        this.selectedAlbum = updated;
      }
    }
  }
};
</script>

<style>

.dashboard {
  display:grid;                       
  grid-template-areas: "albums albums viewer"
                       "albums albums viewer"
                       "albums albums viewer";
            
}

.albums-list {
  grid-area: albums;
}

.album-viewer {
  grid-area: viewer;
}



</style>
