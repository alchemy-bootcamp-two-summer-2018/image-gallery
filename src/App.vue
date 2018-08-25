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

header {
  padding: 30px;
  font-size: 15px;
  background: #181818;
  text-align: center;
}

a {
  font-family: 'Open Sans';
  text-decoration: none;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 40px;
  color: white;
}

.heart-image {
  width: 25px;
  margin-bottom: -5px;
}

footer {
  background-color: #181818;
  text-align: center;
  margin: 0;
  padding:20px;
  color: white;
  font-family: monospace;
  letter-spacing: 1px;
  font-size: 12px;

}
</style>
