<template>
  <div class="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/albums">Albums</router-link>
      <router-link to="/addAlbum">AddAlbum</router-link>
      
    </header>
  
  <router-view></router-view>
    
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  },
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
</style>
