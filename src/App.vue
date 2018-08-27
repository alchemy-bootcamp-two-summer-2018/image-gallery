<template>
  <div class="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header
  },
  methods: {

  },
};
</script>

<style>


body, html, .app {
  height: 100%;
}
body{
  margin: 0px;
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000d55;
  margin-top: 0px;
  /* background-color: #000d55; */
}


</style>
