<template>
  <div class="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/albums">Albums</router-link>
      <router-link to="/aboutus">About Us</router-link>
    </header>

    <router-view></router-view>
    
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  padding-bottom: 50px;
  font-size: 30px;

}

a {
  text-decoration: none;
  color: initial;
  font-family: monospace;
  padding: 40px;
}
</style>
