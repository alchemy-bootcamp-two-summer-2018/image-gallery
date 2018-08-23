<template>
  <div id="app">
    <header>
      <router-link to="/">HOME</router-link>
      <router-link to="/About">ABOUT</router-link>
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
</style>
