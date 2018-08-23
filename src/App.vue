<template>
  <div id="app">
    <header>
      <router-link to="/">HOME</router-link>
      <router-link to="/About">ABOUT</router-link>
      <router-link to="/albums">ALBUMS</router-link>
      <router-link to="/addalbum">ADD ALBUM</router-link>
      <router-link to="/albumdetail">ALBUM DETAIL</router-link>
    </header>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
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

a {
  margin: 10px;
}
</style>
