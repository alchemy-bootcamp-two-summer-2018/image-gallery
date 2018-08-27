<template>
  <div id="app">
    <header>
      <h1>Cute Animals Photo Albums</h1>
      <img class="header" alt="Dog and Cat Header" src="http://static.tumblr.com/fff16121e816f74cffc899fb0322f811/vv6nlcz/ehAn0rhaz/tumblr_static_animal_header.jpg">
      <div class="nav-wrappper">
        <router-link class="router-link nav" to="/">Home</router-link>
        <router-link class="router-link nav" to="/about">About</router-link>
        <router-link class="router-link nav" to="/albums">Albums</router-link>
      </div>
    </header>

    <router-view :onAdd="handleAdd"></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    handleAdd(newAlbum) {
      this.albums.push(newAlbum);
      console.log('new album', newAlbum);
    }
  }
};
</script>

<style scoped>

 
</style>
