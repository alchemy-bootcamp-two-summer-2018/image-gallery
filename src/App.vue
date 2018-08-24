<template>
  <div id="app">
    <header>
      <h1>Cute Animals</h1>
      <div>
        <router-link class="router-link" to="/">Home</router-link>
        <router-link class="router-link" to="/about">About</router-link>
        <router-link class="router-link" to="/albums">Albums</router-link>
      </div>
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
 
</style>
