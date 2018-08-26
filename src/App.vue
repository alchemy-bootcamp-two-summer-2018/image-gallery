<template>
  <div class="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/albums">Albums</router-link>
      <router-link to="/aboutus">About Us</router-link>
    </header>

    <router-view></router-view>

    <footer> 
      <img class="heart-image" :src="('/made-with-love.png')" />
      <p> Made @ alchameny code lab PDX</p>
    </footer>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    handleUpdate(updated) {
      const index = this.albums.findIndex(album => {
        return album.id === updated.id;
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

footer p {
  text-align: center !important;
}

</style>
